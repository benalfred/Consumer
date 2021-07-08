export default async function({ route, context, redirect, $auth, $axios, store, dispatch }) {
    if ($auth.user && !$auth.user.isAdmin) {
        return redirect('/')
    }
}