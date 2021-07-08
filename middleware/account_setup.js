export default async function({ route, context, redirect, $auth, $axios, store, dispatch }) {
    if ($auth.user && $auth.user.Sex === null) {
        return redirect('/setup-account')
    }
    if ($auth.user.IsAdmin) {
        return redirect('/admin/dashboard')
    }
}
