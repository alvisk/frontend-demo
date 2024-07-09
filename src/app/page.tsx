import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/Cards";
import ResponsiveCardBackdrop from "./components/ResponsiveCardBackdrop";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/Tabs";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-col gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Tearfund <span className="text-[hsl(280,100%,70%)]">Frontend </span>
          Demo
        </h1>
        <div className="mx-auto w-full">
          <Card className="relative w-full rounded-lg  border shadow-md max-md:overflow-hidden">
            <div className="flex flex-col [grid-template-columns:repeat(15,_1fr)] md:grid  md:h-[727px]  [&>*]:[grid-row:1/2]">
              <div className="z-[10] max-md:min-h-[120vw]  md:h-full md:[grid-column:1/16]">
                <ResponsiveCardBackdrop
                  className="aspect-auto h-full  max-md:hidden"
                  src="/cardBackdrops/Desktop.png"
                  alt="Donation impact backdrop"
                />
                <ResponsiveCardBackdrop
                  className="md:hidden"
                  src="/cardBackdrops/Mobile.png"
                  alt="Donation impact backdrop"
                  aspectRatios={{
                    default: "aspect-[3/4]",
                  }}
                />
              </div>
              <div className="bg-orange-gradient absolute bottom-[calc(100%-98vw)] left-0 right-0 z-10 h-20 max-md:block md:hidden"></div>
              <div
                className="absolute bottom-0 left-0 right-0 z-10 h-[calc(100%-98vw)] max-md:block md:hidden"
                style={{
                  backgroundColor: "#D5995F",
                }}
              ></div>
              <div className="z-50 mx-4 self-center bg-white p-4 max-md:-mt-48 max-md:mb-4 md:max-w-[464px]  md:rounded-md md:[grid-column:7/-1] lg:max-w-[624px] lg:[grid-column:8/-1]">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold leading-8 md:text-3xl md:leading-10">
                    Where your money goes
                  </CardTitle>
                  <div className="mt-3 h-1 w-16 bg-[#008CAA]" />
                  <CardDescription className="py-4 text-[1rem] leading-7">
                    We&apos;re committed to making sure your donation has the
                    biggest possible impact for those in greatest need.
                  </CardDescription>

                  <span className="py-4 text-[1rem] font-bold leading-7">
                    Select the numbers below to see how every pound you donate
                    is used...
                  </span>
                </CardHeader>

                <CardContent className="flex">
                  <div className="">
                    <Tabs defaultValue="78p" className="w-full">
                      <TabsList>
                        <TabsTrigger className="bg-background" value="78p">
                          78p
                        </TabsTrigger>
                        <TabsTrigger className="bg-foreground" value="22p">
                          22p
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="78p">
                        <Card className=" rounded bg-background p-4 text-white">
                          <CardContent className="space-y-2">
                            <CardTitle className="text-xl">
                              78p funds life-changing projects{" "}
                            </CardTitle>
                            <div className="space-y-1">
                              That includes ensuring earthquake survivors like
                              Saleh in Syria have food and shelter and
                              empowering the Lihukwa villagers in Zambia.
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="22p">
                        <Card className="rounded bg-foreground p-4 text-white">
                          <CardContent className="space-y-2">
                            <CardTitle className="text-xl">
                              22p ensures we can continue to transform lives
                              tomorrow
                            </CardTitle>
                            <div className="space-y-1">
                              That includes fundraising and support costs, which
                              allows us to make sure your donation has a
                              long-term impact.
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

//  <button className="flex-1 rounded bg-[#7D2E84] py-2 text-lg font-bold text-white"></button>
// <button className="flex-1 rounded bg-[#005F73] py-2 text-lg font-bold text-white"></button>
