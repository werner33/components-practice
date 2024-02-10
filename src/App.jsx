
import TopicSelector from './components/topicSelector/TopicSelector'
import EmailSubscription from './components/emailSubscription/EmailSubscription'

import './App.scss'

function App() {

  return (
    <div className="app">
      <TopicSelector name="Jordan" />      
      <EmailSubscription /> 
    </div>
  )
}

export default App
