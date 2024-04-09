import Link from 'next/link';
import StyledComponentsTest from '../../ui/main/StyledComponents';

export default function StyledWith() {
  return (

     
      <section className="flex flex-col justify-center items-center ">
        Discover our blockchain number store{' '}
        <Link
          href="/counter"
          className="px-8 border-slate-400 border-2 rounded-md mx-2"
        >
          {' '}
          here
        </Link>
        <StyledComponentsTest/>
      </section>

  );
}