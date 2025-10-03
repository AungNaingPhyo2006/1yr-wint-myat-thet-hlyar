import Card from "@/components/Card/Card";
import PageWrapper from "../page_wrapper";
import projects from "../../data/db";
import Link from "next/link";

const Projects = () => {
  return (
    <PageWrapper>
      <main>
        <section>
          <h1 className="text-5xl text-center">Projects</h1>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-8">
            {
              projects.map(pj => {
                return (
                  <div key={pj.id}>
                    <Card {...pj} />
                  </div>
                )
              })
            }
          </div>
          <Link href={"https://github.com/AungNaingPhyo2006"} className="px-12 py-4 rounded-b-xl bg-[var(--primary-tint-80)] text-center block -mt-5">
                <span className="text-blue-900 text-2xl bold underline">More Projects</span>
         </Link>
        </section>
        <div className="h-[30px] my-30"></div>
    
      </main>
    </PageWrapper>
  );
}

export default  Projects;