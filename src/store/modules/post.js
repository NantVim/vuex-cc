export default {
    actions: {
        async fetchPosts(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const posts = await res.json()
            ctx.commit('updatePosts')
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        }
    }
}