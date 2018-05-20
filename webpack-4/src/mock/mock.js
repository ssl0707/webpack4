import axios from 'axios'
import Adapter from 'axios-mock-adapter' 
let mock = new Adapter(axios)
let data = [
    {
        "name":"123"
    },
    {
        "name":"1233333333333333"
    },
    {
        "name":"123344444"
    }
];
let list = () => {
    mock.onPost('/api/list').reply((config) => {
        return new Promise((resolve,reject) => {
            resolve(['200',data])
        })
    })
}
export default list