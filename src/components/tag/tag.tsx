import { component$ } from "@builder.io/qwik";

export interface TagProps {
	tag: string;
}

export default component$ (({tag}:TagProps)=>{
	//TODO: Modify the color of the tag based on the tag name
	const color = tag === 'Design' ? 'bg-blue-500' : tag === 'Frontend' ? 'bg-green-500' : tag === 'Backend' ? 'bg-yellow-500' : tag === 'Marketing' ? 'bg-pink-500' : 'bg-purple-500'
	return <span class={`px-3 text-white font-semibold ${color} py-1 rounded-full`}>{tag}</span>
})