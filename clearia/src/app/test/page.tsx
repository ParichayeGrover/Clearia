import { api } from "~/trpc/server";
import { AllUsers, LatestUser, UsersManager } from "~/app/_components/user";
import {
  AllPatients,
  LatestPatient,
  PatientsManager,
} from "~/app/_components/patient";
import { IcuAdmissionsManager } from "~/app/_components/icuAddmission";
import { StatusUpdateDashboard } from "~/app/_components/statusUpdates";

export default async function Home() {
  void api.user.getLatest.prefetch();
return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Test <span className="text-[hsl(280,100%,70%)]">Clearia</span> App
        </h1>
        <div className="space-y-8">

          <div className="border-b pb-6">
            <LatestUser />
          </div>
          <div>
            <PatientsManager />
          </div>
          <div className="border-b pb-6">
            <StatusUpdateDashboard />
          </div>
          <div className="border-b pb-6">
            <AllUsers />
          </div>
          <div className="border-b pb-6">
            <LatestPatient />
          </div>
          <div className="border-b pb-6">
            <AllPatients />
          </div>
        </div>
      </div>
    </main>
);
}

