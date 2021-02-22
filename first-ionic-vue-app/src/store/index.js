import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

const store = createStore({
  state() {
    return {      
      memories: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1574950578143-858c6fc58922?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          title: 'A trip into the mountains',
          description: 'It was a really nice trip'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          title: 'Surfing the sea side',
          description: 'Feeling the cool breeze'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80',
          title: 'Good eating',
          description: 'Really tasty'
        }
      ]
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: uuidv4(),
        title: memoryData.title,
        image: memoryData.image,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData){
      context.commit('addMemory', memoryData);
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id == memoryId);
      };
    },
  }
});

export default store;