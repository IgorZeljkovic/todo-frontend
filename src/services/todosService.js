import axios from 'axios';

async function getTodos () {
    try {
        return await axios.get('/todos')
    } catch (e) {

    }
}

const todosService = { getTodos };
export default todosService;