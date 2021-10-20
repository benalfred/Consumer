export default async function({ route, context, redirect, $auth, $axios, store, dispatch }) {
    if ($auth.user && $auth.user.RequireNewPassword) {
        return true
    } else {
        // return redirect('/')
    }
}