import { Login } from './src/modules/Login';
import { Welcome } from './src/modules/Welcome';
import { Detail } from './src/modules/Detail';
import { Create } from './src/modules/Create';
import { Navigation } from 'react-native-navigation';

const App = () => {
    Navigation.registerComponent('Login', () => Login);
    Navigation.registerComponent('Welcome', () => Welcome);
    Navigation.registerComponent('Detail', () => Detail);
    Navigation.registerComponent('Create', () => Create);
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Login',
            title: 'Login'
        },
    });
};

App();
