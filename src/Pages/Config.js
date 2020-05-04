export default {
   // url:'http://192.168.0.110:8000/'
    // url: 'http://3.88.85.200:80/'
    url: 'http://3.134.102.14/'
}


// axios.get(
//     Base.url + 'AdminDashboard/',
//     {
//         headers: {
//             'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
//         }
//     }
// ).then(response => {
//     console.log('Response Normal :', response);

//     this.setState({
//         data: response.data.results,
//         next: response.data.next,
//         prev: response.data.previous,
//     })

// }).catch(error => {
//     console.log('Error loading quotation count: ', error);
//     NotificationManager.error('Error : ', error, 3000);
// })


// var bodyFormData = new FormData();
// bodyFormData.set('username', username);
// bodyFormData.set('password', password);
// axios.post(
//     Base.url + 'Login/',
//     bodyFormData,
//      {
//         headers: {
//             'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
//         }
//     }
// )
// .then(response =>{
//     console.log('response : ',response);
//         if(response.data.Status){
//             alert(response.data.Message)
//         }else{
//             console.log(response.data.Message);
//             alert(response.data.Message+" : "+response.data.Error)
//         }
// })
// .catch(error=>{
//     console.log(error);
// })

// axios.delete(
//     Base.url + 'Priority/?id='+data.id,
//     {
//         headers: {
//             'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
//         }
//     }
// )
// .then(response =>{
//     console.log('response : ',response);
//         if(response.data.Status){
//             alert(response.data.Message)
//             this.fetchAllData()
//             this.loading(false)
//         }else{
//             console.log(response.data.Message);
//             alert(response.data.Message+" : "+response.data.Error)
//             this.loading(false)

//         }
// })
// .catch(error=>{
//     console.log(error);
// })


// import axios from 'axios'
// import Base from './Config'
// export default class componentName extends Component {
//     constructor(){
//         super()
//         this.state={
//             data:[],
//             next:null,
//             prev:null,
//             loading:true,
//         }
//     }

//     loading=(args)=>{
//         this.setState({
//             loading:args
//         })
//     }

//     componentDidMount(){
//         this.fetchAllData()
//     }

//     next=()=>{
//         this.loading(true)
//         axios.get(
//           this.state.next,
//           { 
//               headers: { 
//                 'Authorization': 'Token '+localStorage.getItem('ecommerce_token'),
//               } 
//           }
//         ).then(response =>{
//           this.setState({
//             data:response.data.results,
//             next:response.data.next,
//             prev:response.data.previous,
//             loading:false, 

//           })
//         })
//         .catch(error =>{
//             NotificationManager.error('Error : ', error, 3000);
//         })
//     }

//     prev=()=>{
//         this.loading(true)
//         axios.get(
//           this.state.prev,
//           { 
//               headers: { 
//                   'Authorization': 'Token '+localStorage.getItem('ecommerce_token'),
//               } 
//           }
//         ).then(response =>{
//           this.setState({
//             data:response.data.results,
//             next:response.data.next,
//             prev:response.data.previous,
//             loading:false,
//           })
//         })
//         .catch(error =>{
//             NotificationManager.error('Error : ', error, 3000);
//         })
//     }

//     fetchAllData(){
//         this.loading(true)
//         axios.get(
//             Base.url + 'url',
//             {
//                 headers: {
//                     'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
//                 }
//             }
//         ).then(response => {
//             console.log('Response all :', response);
//             console.log('Response all :', response.data.results);

//             this.setState({
//                 data: response.data.results,
//                 next: response.data.next,
//                 prev: response.data.previous,
//                 loading:false,
//             })
//         }).catch(error => {
//             console.log('Error loading quotation count: ', error);
//             NotificationManager.error('Error : ', error, 3000);
//         })
//     }

//     render() {
//         return (
//             <div>
//                Django React So lovely
//             </div>
//         );
//     }
// }