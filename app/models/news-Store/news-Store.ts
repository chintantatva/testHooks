import { Instance, SnapshotOut, types, getParent } from "mobx-state-tree"
import { flow } from "mobx";
import { Api } from "../../services/api";




/**
 * A RootStore model.
 */
// prettier-ignore

const api = new Api();
api.setup()
export const NewsStoreModel = types.model("NewsStore").props({
    newsList: types.frozen(),
    selectedNews: types.frozen()
}).actions(self => ({
    fetchNews: flow(function* fetchNews() {
        const newsList = yield api.getNewsList({ country: "in", category: "business" })
        if (newsList.kind == 'ok') {
            getParent(self).newsStore.updateNewsList(newsList.newsList.articles)
        }
    }),
    updateNewsList(value) {
        self.newsList = value
    },
    updateSelectedNews(value) {
        self.selectedNews = value
    }
}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof NewsStoreModel> { }

/**
 * The data of a RootStore.
 */
export interface NewsStoreSnapshot extends SnapshotOut<typeof NewsStoreModel> { }
