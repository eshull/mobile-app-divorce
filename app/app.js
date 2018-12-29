
import Vue from 'nativescript-vue';

import App from './components/App';

// import HelloWorld from './components/HelloWorld';

// import Home from './components/Home';

// import Therapy from './components/Therapy';



// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

// import orientation from './nativescript-orientation'



new Vue({

    render: h => h('frame', [h(App)]),
    // mounted() {
    //     setTimeout(() => {
    //         orientation.setOrientation('portrait')
    //         orientation.disableRotation();
    //     }, 0)
    // }


}).$start();


// const Master = {
//     template: `
//     <Page>
//       <ActionBar title="Home" />
//       <GridLayout class="page">
//         <Button  height="100%" text="" @tap="$navigateTo(homePage)" />
//       </GridLayout>
//     </Page>
//   `,

//     data() {
//         return {
//             homePage: Home,
//             therapyPage: Therapy
//         }
//     }
// };

// new Vue({

//     render: h => h('frame', [h(Master)])


// }).$start();




// Default Below

// import Vue from "nativescript-vue";

// import Home from "./components/Home";

// new Vue({

//     template: `
//         <Frame>
//             <Home />
//         </Frame>`,

//     components: {
//         Home
//     }
// }).$start();
