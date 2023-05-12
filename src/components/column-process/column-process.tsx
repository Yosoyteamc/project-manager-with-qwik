import { component$ } from '@builder.io/qwik';
import { EllipsisVerticalIcon, PlusIcon } from 'heroicons-qwik/24/outline';
import Task from '../task/task';
import type { TaskType } from '~/types/types';

export interface ColumnProcessProps {
	title: string;
	color: string;
	TaskList: TaskType[];
}

export const ColumnProcess = component$(({title, color, TaskList}: ColumnProcessProps) => {
	return (
		<div class={'p-3 flex flex-col gap-3 w-max'}>
				<div class={'flex justify-between items-center'}>
					<div class={'text-sm flex gap-1 items-center'}>
						<div class={`w-2 h-2 bg-${color}-600 rounded-full`}></div>
						{ title }
						<span class={'text-gray-400'}>{TaskList.length}</span>
					</div>
					<button type="button" title="Options" class={'flex items-center'}>
						<EllipsisVerticalIcon class={'w-5 h-5'}/>
					</button>
				</div>
				<button type='button' title='Add new task' class={'bg-white p-2 flex justify-center rounded-md'}><PlusIcon class={'w-6 h-6'}/></button>
				{
					TaskList.map((task: TaskType, index: number) => {
						return <Task key={index} Task={task}></Task>
					})
				}
			</div>
	)
});