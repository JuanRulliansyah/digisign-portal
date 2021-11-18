import React from "react";

// Components
import CardVerification from "components/Cards/CardVerification";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardVerification
                  statSubtitle="FULFILLMENT"
                  statTitle="KYC"
                  statLink="/app/kyc"
                  statStatus="Verified"
                  statPercentColor="text-emerald-500"
                  statDescripiron="congratulations"
                  statIconName="far fa-address-card"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardVerification
                  statSubtitle="FULFILLMENT"
                  statTitle="Position Letter"
                  statStatus="Empty"
                  statStatusColor="text-red-500"
                  statDescripiron="please upload your position letter"
                  statIconName="far fa-id-badge"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardVerification
                  statSubtitle="REQUEST"
                  statTitle="Certificate"
                  statStatus="Empty"
                  statStatusColor="text-red-500"
                  statDescripiron="please submit your position letter"
                  statIconName="fas fa-certificate"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
