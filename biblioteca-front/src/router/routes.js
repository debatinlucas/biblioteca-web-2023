import authRoutes from '@/modules/auth/auth.routes';
import homeRoutes from '@/modules/home/home.routes';
import errorRoutes from '@/modules/error/error.routes';

const routes = [
  {
    path: '*',
    redirect: '/',
  },
];

// ... representa que serão obtidos todos os dados dos arquivos de rotas e empilhá-los em uma única lista
export default [
  ...routes,
  ...homeRoutes,
  ...authRoutes,
  ...errorRoutes,
];
