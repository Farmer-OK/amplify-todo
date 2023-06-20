import logo from './logo.svg';
import './App.css';
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Flex, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Projectoverview, ContentGroup, Group17, Rightmenu, Sidebarthin, Sidebar, Frame106, Frame64, Frame55, Frame76, studioTheme, NewForm1, TodoCreateForm, TodoUpdateForm  } from './ui-components'

Amplify.configure(awsExports)

function App() {
  return (
    <div className="App">
      <Flex direction={"column"} alignItems={"center"}>
        <Flex direction={"row"}>
          <Sidebar/>
          <Flex direction={"column"}>
            <Projectoverview/>
            <ContentGroup/>
          </Flex>
          <Rightmenu/>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
