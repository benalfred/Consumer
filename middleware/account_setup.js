export default async function({ route, context, redirect, $auth, $axios, store, dispatch }) {
    if ($auth.user && $auth.user.RequireNewPassword) {
        return redirect('/setup-account')
    }
}