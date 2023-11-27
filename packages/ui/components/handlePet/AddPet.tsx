import { clsx } from '@near/clsx';
import Link from 'next/link';

interface AddPetProps {
  href: string;
  backgroundColor?: 'white' | 'gray';
  className?: string;
}

/**
 * @author `송용수`
 *
 * @desc 반려동물 등록하기 UI 컴포넌트
 *
 * @param href
 * — (`string`)
 * 반려동물 등록 페이지 링크 (필수)
 *
 * @param backgroundColor
 * — (`'white'` | `'gray'`)
 * 배경 색상 (기본값: `'gray'`)
 *
 * @param className
 * — (`string`)
 * 컴포넌트에 적용할 className
 */
function AddPet({ href, backgroundColor = 'gray', className }: AddPetProps) {
  return (
    <section
      className={clsx(
        'flex items-center w-[27.75rem] h-[5.125rem] rounded-[0.625rem] overflow-hidden shadow-none',
        `${backgroundColor === 'white' ? 'bg-white' : 'bg-gray-3'}`,
        className,
      )}
    >
      <Link
        href={href}
        className='flex items-center gap-4 ml-10 text-sm font-semibold leading-tight bg-transparent text-text-gray'
      >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.9844 31.0312C13.8802 31.0312 11.901 30.6302 10.0469 29.8281C8.20312 29.0365 6.57812 27.9375 5.17188 26.5312C3.76562 25.125 2.66146 23.5 1.85938 21.6562C1.06771 19.8021 0.671875 17.8229 0.671875 15.7188C0.671875 13.6146 1.06771 11.6406 1.85938 9.79688C2.66146 7.94271 3.76562 6.3125 5.17188 4.90625C6.57812 3.5 8.20312 2.40104 10.0469 1.60938C11.901 0.807292 13.8802 0.40625 15.9844 0.40625C18.0885 0.40625 20.0625 0.807292 21.9062 1.60938C23.7604 2.40104 25.3906 3.5 26.7969 4.90625C28.2031 6.3125 29.3073 7.94271 30.1094 9.79688C30.9115 11.6406 31.3125 13.6146 31.3125 15.7188C31.3125 17.8229 30.9115 19.8021 30.1094 21.6562C29.3073 23.5 28.2031 25.125 26.7969 26.5312C25.3906 27.9375 23.7656 29.0365 21.9219 29.8281C20.0781 30.6302 18.099 31.0312 15.9844 31.0312ZM15.9844 29.8438C17.9427 29.8438 19.776 29.4792 21.4844 28.75C23.1927 28.0208 24.6927 27.0104 25.9844 25.7188C27.2865 24.4167 28.3021 22.9115 29.0312 21.2031C29.7604 19.4948 30.125 17.6667 30.125 15.7188C30.125 13.7708 29.7604 11.9427 29.0312 10.2344C28.3021 8.52604 27.2865 7.02083 25.9844 5.71875C24.6927 4.41667 23.1927 3.40104 21.4844 2.67188C19.776 1.94271 17.9427 1.57812 15.9844 1.57812C14.0365 1.57812 12.2083 1.94271 10.5 2.67188C8.79167 3.40104 7.28646 4.41667 5.98438 5.71875C4.69271 7.02083 3.68229 8.52604 2.95312 10.2344C2.22396 11.9427 1.85938 13.7708 1.85938 15.7188C1.85938 17.6667 2.22396 19.4948 2.95312 21.2031C3.68229 22.9115 4.69271 24.4167 5.98438 25.7188C7.28646 27.0104 8.79167 28.0208 10.5 28.75C12.2083 29.4792 14.0365 29.8438 15.9844 29.8438ZM9.07812 15.7188C9.07812 15.5417 9.13542 15.3958 9.25 15.2812C9.36458 15.1562 9.51042 15.0938 9.6875 15.0938H15.3906V9.40625C15.3906 9.22917 15.4479 9.08333 15.5625 8.96875C15.6771 8.85417 15.8125 8.79688 15.9688 8.79688C16.1458 8.79688 16.2917 8.85417 16.4062 8.96875C16.5208 9.07292 16.5781 9.21875 16.5781 9.40625V15.0938H22.2969C22.474 15.0938 22.6146 15.1562 22.7188 15.2812C22.8333 15.3958 22.8906 15.5417 22.8906 15.7188C22.8906 15.875 22.8333 16.0104 22.7188 16.125C22.6042 16.2396 22.4635 16.2969 22.2969 16.2969H16.5781V22C16.5781 22.1771 16.5208 22.3229 16.4062 22.4375C16.2917 22.5521 16.1458 22.6094 15.9688 22.6094C15.8125 22.6094 15.6771 22.5521 15.5625 22.4375C15.4479 22.3125 15.3906 22.1667 15.3906 22V16.2969H9.6875C9.52083 16.2969 9.375 16.2396 9.25 16.125C9.13542 16.0104 9.07812 15.875 9.07812 15.7188Z'
            fill='#A3A3A3'
          />
        </svg>
        반려동물 등록하기
      </Link>
    </section>
  );
}

export default AddPet;
