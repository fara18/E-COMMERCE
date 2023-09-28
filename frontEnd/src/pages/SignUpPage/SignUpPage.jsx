import React from 'react'
import FormItem from '../../components/FormItem/FormItem'

export default function SignUpPage() {
  return (
    <div>
     <FormItem
        title="Sign Up"
     
        btn={{ submit: "Sign Up", redirect: "Login" }}
        formType="signUp"
           info="By signing up on the site, you agree to our Rules and Privacy Policy
        and consent to the newsletter."
      />
     
    </div>
  )
}
