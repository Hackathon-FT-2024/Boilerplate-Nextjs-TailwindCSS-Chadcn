export default function Page() {
    return (
        <>
            <main className="flex flex-col min-h-screen">
                <div className="mx-auto my-auto pb-[10%] w-3/4">
                    <div className="grid grid-rows-3 xs:gap-2">
                        <h1 className="my-auto text-center font-semibold text-4xl xs:text-6xl">Private route</h1>
                        <h1 className="my-auto text-center text-secondary font-semibold text-2xl xs:text-4xl">example page</h1>
                    </div>
                </div>
            </main>
        </>
    )
}