import { useTrackSelection } from "./bil/useTrackSelection";
import { PageTitle } from "./ui/PageTitle";
import { TrackDetail } from "./ui/TrackDetail";
import { TracksList } from "./ui/TracksList";

export function App() {
  const {trackId, handleTrackSelect} = useTrackSelection()

  return (
    <div>
      <PageTitle/>
      <div style={{display: "flex", gap: '30px'}}>  
        <TracksList onTrackSelected={handleTrackSelect} selectedTrackId={trackId}/>   
        <TrackDetail trackId={trackId} /> 
      </div>
    </div>
  )
}

// const Counter = () => {
//   const {count, inc} = useCounter()
  
//   return <button onClick={inc}>{count}</button>
// }

// const CounterForChildren = () => {
//   const {count, inc} = useCounter(3)
  
//   return <button onClick={inc}>{count}</button>
// }

// const useCounter = (initalValue: number = 0) => {
//   const [count, setCount] = useState(initalValue);

//   useEffect(() => {
//     setInterval(() => setCount(0), 3000)
//   }, [])

//   return {count, inc: () => setCount(count + 1)}
// }



