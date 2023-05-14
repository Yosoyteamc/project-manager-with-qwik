import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ColumnProcess } from '~/components/column-process/column-process';
import { Projects } from '~/data/projects';
import type { TaskType } from '~/types/types';

export default component$(() => {

	const project = useStore(Projects[0]);

  return (
    <>
			<section class={'flex gap-1'}>
			{
				project.processes.map((process, index)=>{
					const taskList = project.tasks.map((task:TaskType)=>{
						if(task.process === process){
							return task;
						}
					}) as TaskType[];
					if(taskList.length === 0){
						return null }
					else {
						return <ColumnProcess key={index} color={'bg-green-500'} title={process} TaskList={taskList}></ColumnProcess>
					}
				})		
			}
			</section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Project Manager',
  meta: [
    {
      name: 'description',
      content: 'Project Manager',
    },
  ],
};
