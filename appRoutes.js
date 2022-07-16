import petRoutes from './routes/petRoutes';
import categoryRoutes from './routes/categoryRoutes';
import tagRoutes from './routes/tagRoutes';

export default (app)  => {
    app.use('/pet', petRoutes);
    app.use('/category', categoryRoutes);
    app.use('/tag', tagRoutes);
};
