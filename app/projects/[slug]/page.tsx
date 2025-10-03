// 'use client';

import PageWrapper from '@/app/page_wrapper';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import CardStyles from "../../../components/Card/card_styles.module.css"
import projects from "../../../data/db";
import Link from 'next/link';

interface CardData {
  id: number,
  img_src: string,
  project_src: string,
  title: string,
  des: string,
  long_des: string,
  toLink: string
}

const ProjectDetails = ( {params}: {params: {slug: string}} ) => {
  const { slug } = params;
  console.log('Params=>', params.slug)
  const projectDetails = projects.find((m) => m.id === parseInt(slug));

  return (
    <PageWrapper>
      <main className='min-h-[calc(100vh-10px)]'>
        <section>
          <h1 className="text-4xl sm:text-5xl text-center mb-6 text-gray-800">{projectDetails?.title}</h1>
          <div className='flex flex-col items-center'>
            <p className='w-full lg:w-[70%] text-3xl text-gray-600 text-justify'>
              { projectDetails?.long_des}
            </p>
            <div className="flex gap-8 my-16">
              <Link href={"/projects"} className="px-12 py-4 rounded-xl bg-[var(--primary-tint-80)] text-center block">
                <span>Back</span>
              </Link>
              {/* <Link href={projectDetails?.project_src} className="px-12 py-4 rounded-xl bg-[var(--primary-tint-80)] text-center block">
                <span>Go to Project</span>
              </Link> */}
              {projectDetails?.project_src && (
                <Link href={projectDetails.project_src} className="px-12 py-4 rounded-xl bg-[var(--primary-tint-80)] text-center block">
                  <span>Go to Project</span>
                </Link>
              )}
            </div> 
          </div> 
        </section>
      </main>
    </PageWrapper>
  );
}

export default ProjectDetails;

export async function generateStaticParams() {
  return projects.map((pj) => ({
    slug: `${pj.id}`,
  }));
}