import {useGetRecentPosts} from "../lib/reactQuery/queriesAndMutations.ts";
import Loader from "../utility/Loader.tsx";

interface IRecentPosts {
    code:string
    name:string
}
const SelectOptions = () => {
    const {isLoading, data } = useGetRecentPosts()

    if (isLoading) return (
        <div className="w-full mt-[120px]">
            <Loader />
        </div>
    )

    return (
        <div className="grid w-[470px] grid-rows-2 gap-[30px] pt-[70px] grid-cols-2">
            <select className="w-[220px]  h-[50px] border rounded" name="Location">
                <option hidden value="Location">Location</option>
                {data.data && data.data.map((el: IRecentPosts) => (
                    <option key={el.code}>{el.name}</option>
                ))}
            </select>
            <select className="w-[220px] h-[50px] border rounded" name="Activity">
                <option hidden value="Activity">Activity</option>
                <option value="option2">Recreational</option>
                <option value="option3">Cultural</option>
                <option value="option3">Sporty and extreme</option>
                <option value="option3">Bicycle</option>
                <option value="option3">Horse</option>
            </select>
            <select className="w-[220px] h-[50px] border rounded" name="Grade">
                <option hidden value="Grade">Grade</option>
                <option value="option2">Easy</option>
                <option value="option3">Midl</option>
                <option value="option3">Hard</option>
            </select>
            <input type="date" id="date" name="date"   className="w-[220px] pl-1 h-[50px] border rounded" >

            </input>
            <button className="w-[180px] mt-[50px] text-white rounded-[8px] h-[60px] bg-orange">Explore
            </button>
        </div>
    );
};

export default SelectOptions;