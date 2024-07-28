import {createContext, useState} from "react";
import {baseUrl} from "../baseUrl"

export const AppContext = createContext();

export default function AppContextProvider({children}){
   const [load,setLoad]=useState(false); 
   const [posts,setPosts]=useState([]); 
   const [page,setPage]=useState(1); 
   const [tpage,setTpage]=useState(null); 

    async function fetchBlogPosts(page=1){
        setLoad(true);
        let url=`${baseUrl}?page=${page}`
        try {
            const result= await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTpage(data.totalPages);


            const updatedPosts = await Promise.all(
                data.posts.map(async (post) => {
                  const response = await fetch("https://picsum.photos/500/200?random=1");
                  post.img = response.url;
                  return post;
                })
            );

        } 
        catch (error) {
            console.log("data");
            setPage(1);
            setPosts([]);
            setTpage(null);
        }
        setLoad(false);
    }
    
    function handelPage(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        load,
        setLoad,
        posts,
        setPosts,
        page,
        setPage,
        tpage,
        setTpage,
        fetchBlogPosts,
        handelPage
    };

   return <AppContext.Provider  value={value}>
    {children}
   </AppContext.Provider>
}