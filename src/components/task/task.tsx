import { component$ } from "@builder.io/qwik";
import { EllipsisVerticalIcon, PlusIcon, ChatBubbleBottomCenterIcon, LinkIcon } from "heroicons-qwik/24/outline";

export const Task = {
	title: 'Pages "About" and "Careers"',
	description: 'All the details are in the file, I\'m sure it will turn out cool!',
	tags: ['Website-green', 'Design-blue'],
	subtasks: [{title:'About', state: true},{title:'Careers', state: false},{title:'Contact', state: false}],
	comments: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
	owner: 'John Doe',
	created: {
		date: '2021-10-10',
		time: '10:10'
	},
	members: ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith'],
	link: ['https://www.google.com/']
}

export default component$(()=>{
return (
	<div class={'max-w-[260px] bg-white p-5 rounded-xl flex flex-col gap-2 items-start'}>
		<div class={'flex justify-between items-center w-full mb-2'}>
			<div class={'flex gap-1 text-xs select-none'}>
				{
					Task.tags.map((tag, index) => {
						const type = tag.split('-')[0];
						const color = tag.split('-')[1];
						return <span key={index} class={`px-3 text-white font-semibold py-1 bg-${color}-600 rounded-full`}>{type}</span>
					})
				}
			</div>
			<button type="button" title="Options" class={'flex items-center'}>
				<EllipsisVerticalIcon class={'w-5 h-5'}/>
			</button>
		</div>
		<div class={'flex flex-col gap-2'}>
			<div class={'text-sm font-semibold'}>{Task.title}</div>
			<div class={'text-sm text-gray-500'}>{Task.description}</div>
		</div>
		{ Task.subtasks.length > 0 &&
		<div class={'w-full flex flex-col gap-2'}>
			<div>
				{
					Task.subtasks.map((subtask, index) => {
						return <div key={index} class={'flex gap-2 items-center'}>
							<input type="checkbox" checked={subtask.state} id={subtask.title.replaceAll(' ','')}  title={subtask.title} class={'w-3 h-3 rounded-full bg-slate-300 peer'}></input>
							<label for={subtask.title.replaceAll(' ','')} class={'text-sm cursor-pointer text-gray-500 peer-checked:line-through peer-checked:text-gray-400'}>{subtask.title}</label>
						</div>
					})
				}
			</div>
			<div class={'text-sm text-gray-500 border-t w-full'}></div>
			<button type="button" title="Add subtask" class={'flex gap-2 items-center text-sm text-gray-500'}>
				<PlusIcon class={'w-5 h-5'}/>
				Add Subtask
			</button>
		</div>
		}
		<div class={'text-sm text-gray-500 border-t w-full'}></div>
		<div class={'flex justify-between w-full'}>
			<div class={'flex'}>
				{
					Task.members.map((member, index) => {
						return <div key={index}>
							<div class={'w-6 h-6 ml-[-7.5px] rounded-full bg-slate-300 border border-white'}></div>
						</div>
					})
				}
			</div>
			<div class={'flex gap-2'}>
				<div class={'flex text-gray-500 items-center gap-1'}>
					<ChatBubbleBottomCenterIcon class={'w-4 h-4 text-gray-500'}/> {Task.comments.length}
				</div>
				{ Task.link.length > 0 &&
					<div class={'flex text-gray-500 items-center gap-1'}>
						<LinkIcon class={'w-4 h-4 text-gray-500'}/>{Task.link.length}
					</div>
				}
			</div>
		</div>
	</div>
);
});