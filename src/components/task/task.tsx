import { component$ } from "@builder.io/qwik";
import { EllipsisVerticalIcon, PlusIcon, ChatBubbleBottomCenterIcon, LinkIcon } from "heroicons-qwik/24/outline";
import Tag from "../tag/tag";
import type { TaskType } from "../../types/types"

export interface TaskProps {
	Task: TaskType;
}

export default component$(({Task}:TaskProps)=>{
return (
	<div class={'max-w-[260px] bg-white p-5 rounded-xl flex flex-col gap-2 items-start'}>
		<div class={'flex justify-between items-center w-full mb-2'}>
			<div class={'flex gap-1 text-xs select-none'}>
				{
					Task.tags.map((tag, index) => {
						return <Tag key={index} tag={tag}></Tag>
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
				<button type="button" class={'flex text-gray-500 items-center gap-1'}>
					<ChatBubbleBottomCenterIcon class={'w-4 h-4 text-gray-500'}/> {Task.comments.length}
				</button>
				{ Task.link.length > 0 &&
					<button type="button" class={'flex text-gray-500 items-center gap-1'}>
						<LinkIcon class={'w-4 h-4 text-gray-500'}/>{Task.link.length}
					</button>
				}
			</div>
		</div>
	</div>
);
});