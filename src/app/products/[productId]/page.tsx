export default function ProductDetails({params}:{params:{productId:string}}) {
        return (
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Product {params.productId} Details &nbsp;
              </h1>

                
            </div>
        <h2>Info: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, atque aut! Illo qui soluta quae, eveniet cupiditate quasi modi quas libero vitae sint. Iste nihil magni voluptas optio, minus molestiae.</h2>
      
          </main>
        );
      }
      