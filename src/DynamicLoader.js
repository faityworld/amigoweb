import React, { Suspense } from 'react';
import Preloader from './components/preloader/Preloader';

function DynamicLoader(props) {
    console.log(props)
    //const LazyComponent = React.lazy(() => import(`${props.comp}`));
    return (
      <Suspense fallback={<Preloader />}>
        <props.comp props ={props} />
      </Suspense>
    );
  }

  export default DynamicLoader;