export default async function({ route, context, redirect, $auth, $axios, store, dispatch }) {
    if ($auth.user && $auth.user.picture == null) {
        console.log('yes', $auth.user)
            // return redirect('/setup-account')
    }
}