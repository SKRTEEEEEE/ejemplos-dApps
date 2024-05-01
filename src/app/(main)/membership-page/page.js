import ProtectedRoutesMembership from "@/utils/protectedRoutesMembership";


export default function MembersPage() {
  return (
    <ProtectedRoutesMembership>
      
        <div className="flex justify-center items-center h-max">
          <div className="flex flex-col">
            <section>Members page</section>
          </div>
        </div>
  
    </ProtectedRoutesMembership>
  );
}