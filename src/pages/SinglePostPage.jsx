import React from 'react'
import Image from './../components/Image';
import { Link } from 'react-router-dom';
import BlogSideMenu from './../components/BlogSideMenu';
import Search from './../components/Search';
import CommentsSection from './../components/CommentsSection';

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* details */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, optio odit.</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptate autem atque deleniti ut, aliquam blanditiis, iste quibusdam perspiciatis suscipit quis totam voluptatibus quo sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, optio odit.
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src="postImg.jpeg" w="600" className="rounded-2xl object-cover " />
        </div>
      </div>

      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/*text*/}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, harum rem vitae aspernatur consectetur quos omnis tenetur commodi hic. Debitis quod reprehenderit quo rerum, illum facere fugit placeat voluptates quasi minima dicta, inventore molestiae aliquid? Autem consequuntur odit voluptatum facilis, porro ipsam nemo, dolor modi in saepe perferendis, nisi exercitationem obcaecati praesentium debitis optio! Assumenda cum, reiciendis nam iure adipisci quaerat quos eveniet nemo quas error rerum corrupti soluta pariatur eius id, nesciunt ducimus molestias facere! Sapiente similique obcaecati eaque explicabo esse, mollitia accusantium voluptate nulla neque alias ipsam placeat. Quisquam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, optio odit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, harum rem vitae aspernatur consectetur quos omnis tenetur commodi hic. Debitis quod reprehenderit quo rerum, illum facere fugit placeat voluptates quasi minima dicta, inventore molestiae aliquid? Autem consequuntur odit voluptatum facilis, porro ipsam nemo, dolor modi in saepe perferendis, nisi exercitationem obcaecati praesentium debitis optio! Assumenda cum, reiciendis nam iure adipisci quaerat quos eveniet nemo quas error rerum corrupti soluta pariatur eius id, nesciunt ducimus molestias facere! Sapiente similique obcaecati eaque explicabo esse, mollitia accusantium voluptate nulla neque alias ipsam placeat. Quisquam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, optio odit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, harum rem vitae aspernatur consectetur quos omnis tenetur commodi hic. Debitis quod reprehenderit quo rerum, illum facere fugit placeat voluptates quasi minima dicta, inventore molestiae aliquid? Autem consequuntur odit voluptatum facilis, porro ipsam nemo, dolor modi in saepe perferendis, nisi exercitationem obcaecati praesentium debitis optio! Assumenda cum, reiciendis nam iure adipisci quaerat quos eveniet nemo quas error rerum corrupti soluta pariatur eius id, nesciunt ducimus molestias facere! Sapiente similique obcaecati eaque explicabo esse, mollitia accusantium voluptate nulla neque alias ipsam placeat. Quisquam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, optio odit.
          </p>
        </div>

        {/*side-menu*/}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
              <Link className='text-blue-800'>John Doe</Link>
            </div>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className='flex gap-2'>
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <BlogSideMenu />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      <CommentsSection />
    </div>
  )
}

export default SinglePostPage