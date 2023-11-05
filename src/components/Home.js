import { useSelector } from "react-redux";

const Home = ()=>{
    const users = useSelector((state)=>state.user);
    return(
        <div>
            {console.log(users)}
        </div>
    )
}
export default Home;