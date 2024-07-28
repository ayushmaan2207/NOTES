import {createContext, useState} from "react";
import {baseUrl} from "../baseUrl"
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){
   const [load,setLoad]=useState(false); 
   const [posts,setPosts]=useState([]); 
   const [page,setPage]=useState(1); 
   const [tpage,setTpage]=useState(null); 

   const navigate =useNavigate();

    async function fetchBlogPosts(page=1,tag=null,category){
        setLoad(true);
        let url=`${baseUrl}?page=${page}`

        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`;
        }

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
        navigate({search:`?page=${page}`});
        setPage(page);
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