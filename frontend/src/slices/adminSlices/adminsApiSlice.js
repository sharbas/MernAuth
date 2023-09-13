import { apiSlice } from "../apiSlice";
const ADMIN_URL = '/admin';
const BACKEND_URL='http://localhost:5000'

export const adminsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
      adminLogin:builder.mutation({
          query:(data)=>({
              url:`${BACKEND_URL}${ADMIN_URL}/login`,
              method:'POST',
              body:data
          })
      }),
      adminLogout:builder.mutation({
          query:()=>({
              url:`${BACKEND_URL}${ADMIN_URL}/logout`,
              method:'POST'
          })
      }),
      deleteUser:builder.mutation({
        query:(data)=>({
            url:`${BACKEND_URL}${ADMIN_URL}/delete-user`,
            method:'POST',
            body:data
        })
      })
    })
})

export const { useAdminLoginMutation,useAdminLogoutMutation,useDeleteUserMutation} = adminsApiSlice;