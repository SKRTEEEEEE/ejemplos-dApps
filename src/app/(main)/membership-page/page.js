import ProtectedRoutesMembership from "@/utils/protectedRoutesMembership";


export default function MembersPage() {
  return (
    <ProtectedRoutesMembership>
      
      <section className="flex justify-center items-center h-max">
          <h2 className="flex flex-col">
          Members page
          </h2>
        </section>
  
    </ProtectedRoutesMembership>
  );
}