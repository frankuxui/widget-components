import './App.css'

function App () {
  return (
    <div className='App pt-16 pb-16 mx-5 '>

      {/** container widgets */}
      <div className='box-border m-auto max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-4'>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/44.jpg' alt='avatar' />
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Yolanda</a>
              <span className='text-slate-600 text-sm'>Web Development</span>
            </div>
          </div>
          <a href='#' className='no-underline inline-block'>
            <svg width='27' height='22' viewBox='0 0 27 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M25.3125 17.75C25.3125 18.1976 25.1347 18.6268 24.8182 18.9432C24.5018 19.2597 24.0726 19.4375 23.625 19.4375H3.375C2.92745 19.4375 2.49822 19.2597 2.18176 18.9432C1.86529 18.6268 1.6875 18.1976 1.6875 17.75V7.625C1.6875 7.17745 1.86529 6.74823 2.18176 6.43176C2.49822 6.11529 2.92745 5.9375 3.375 5.9375H5.35275C6.69471 5.93677 7.98148 5.40324 8.93025 4.45419L10.3309 3.05694C10.6464 2.74127 11.0742 2.56349 11.5206 2.5625H15.4761C15.9236 2.5626 16.3527 2.74045 16.6691 3.05694L18.0664 4.45419C18.5366 4.92452 19.0948 5.2976 19.7092 5.55211C20.3237 5.80662 20.9822 5.93758 21.6472 5.9375H23.625C24.0726 5.9375 24.5018 6.11529 24.8182 6.43176C25.1347 6.74823 25.3125 7.17745 25.3125 7.625V17.75ZM3.375 4.25C2.47989 4.25 1.62145 4.60558 0.988515 5.23851C0.355579 5.87145 0 6.72989 0 7.625V17.75C0 18.6451 0.355579 19.5035 0.988515 20.1365C1.62145 20.7694 2.47989 21.125 3.375 21.125H23.625C24.5201 21.125 25.3785 20.7694 26.0115 20.1365C26.6444 19.5035 27 18.6451 27 17.75V7.625C27 6.72989 26.6444 5.87145 26.0115 5.23851C25.3785 4.60558 24.5201 4.25 23.625 4.25H21.6472C20.7522 4.24981 19.8939 3.8941 19.2611 3.26113L17.8639 1.86387C17.2311 1.2309 16.3728 0.875191 15.4777 0.875H11.5223C10.6272 0.875191 9.76891 1.2309 9.13612 1.86387L7.73887 3.26113C7.10609 3.8941 6.24778 4.24981 5.35275 4.25H3.375Z' fill='black' />
              <path d='M13.5 16.0625C12.3811 16.0625 11.3081 15.618 10.5169 14.8269C9.72572 14.0357 9.28125 12.9626 9.28125 11.8438C9.28125 10.7249 9.72572 9.65181 10.5169 8.86064C11.3081 8.06947 12.3811 7.625 13.5 7.625C14.6189 7.625 15.6919 8.06947 16.4831 8.86064C17.2743 9.65181 17.7188 10.7249 17.7188 11.8438C17.7188 12.9626 17.2743 14.0357 16.4831 14.8269C15.6919 15.618 14.6189 16.0625 13.5 16.0625ZM13.5 17.75C15.0664 17.75 16.5687 17.1277 17.6763 16.0201C18.784 14.9125 19.4062 13.4102 19.4062 11.8438C19.4062 10.2773 18.784 8.77504 17.6763 7.6674C16.5687 6.55976 15.0664 5.9375 13.5 5.9375C11.9336 5.9375 10.4313 6.55976 9.32365 7.6674C8.21601 8.77504 7.59375 10.2773 7.59375 11.8438C7.59375 13.4102 8.21601 14.9125 9.32365 16.0201C10.4313 17.1277 11.9336 17.75 13.5 17.75ZM5.0625 8.46875C5.0625 8.69253 4.9736 8.90714 4.81537 9.06537C4.65714 9.22361 4.44253 9.3125 4.21875 9.3125C3.99497 9.3125 3.78036 9.22361 3.62213 9.06537C3.46389 8.90714 3.375 8.69253 3.375 8.46875C3.375 8.24497 3.46389 8.03036 3.62213 7.87213C3.78036 7.7139 3.99497 7.625 4.21875 7.625C4.44253 7.625 4.65714 7.7139 4.81537 7.87213C4.9736 8.03036 5.0625 8.24497 5.0625 8.46875Z' fill='black' />
            </svg>
          </a>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-24 h-24 object-cover' src='https://randomuser.me/api/portraits/men/42.jpg' alt='avatar' />
          <div className='flex rounded-3xl bg-slate-200 p-2 w-full justify-between'>
            <div className='flex items-center justify-center bg-white p-2 rounded-full'>
              <button>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z' />
                </svg>
              </button>
            </div>
            <div className='flex items-center justify-center bg-white p-2 rounded-full'>
              <button>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17S8 16.11 8 15 8.9 13 10 13M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.34 16.34 3 18 3S21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M16 10V20H4V10H16Z' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-24 h-24 object-cover' src='https://randomuser.me/api/portraits/women/45.jpg' alt='avatar' />
          <div className='flex-auto'>
            <a href='#' className='no-underline font-bold block'>Julia Robert</a>
            <span className='text-slate-600'>Frontend Development</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex flex-row justify-between items-start w-full'>
            <div className='flex flex-col justify-center items-center'>
              <span className='font-bold block'>Jun</span>
              <span className='text-lg font-bold text-pink-500'>23</span>
            </div>
            <div className='border h-full bg-slate-200' />
            <div className='flex flex-col justify-center items-start'>
              <span className='font-bold block mb-1'>Wednesday</span>
              <span className='text-sm text-slate-400'>08:00 PM - 18:30 PM</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='flex flex-col break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex flex-col items-start justify-center'>
              <a href='#' className='no-underline font-bold block'>New plan started</a>
              <span className='text-slate-600'>Engineering</span>
            </div>
            <a href='#' className='no-underline rounded-full p-2 transition-all hover:bg-slate-100'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' />
              </svg>
            </a>
          </div>
          <div className='col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4'>
            <dt class='sr-only'>Users</dt>
            <dd className='flex justify-start -space-x-1.5'>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/men/48.jpg' alt='avatar' />
              </a>
            </dd>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4 md:space-x-3'>
            <div className='flex-none'>
              <button type='button' className='inline-flex items-center justify-center rounded-full w-12 h-12 bg-cyan-400'>
                <svg className='w-7 h-7' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path className='fill-white' d='M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z' fill='black' />
                </svg>
              </button>
            </div>
            <div className='min-w-0 flex-auto'>
              <a href='#' className='no-underline font-bold'>Notion podcast</a>
              <p className='truncate mb-2 text-sm text-slate-600'>Lorem ipsum dolor sit consectetur permi...</p>
              <div class='w-full rounded-full overflow-hidden bg-slate-100 h-2 whitespace-nowrap'>
                <div className='bg-cyan-400 h-full w-1/3'><span className='sr-only'>33%</span></div>
              </div>
            </div>
            <span className='text-slate-600'>30:45</span>
          </div>
        </div>

        {/** widget */}
        <a href='#' className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-start space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/50.jpg' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Jenny Wilson</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </a>

        {/** widget */}
        <a href='#' className='break-inside flex bg-gradient-to-r from-[#ec00d8] to-[#A649EE] rounded-xl p-4 mb-4 text-white'>
          <div className='flex items-start space-x-4'>
            <img class='flex-none w-14 h-14 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/53.jpg' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Ana Martinez</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisi quis nostrud minim.</p>
            </div>
          </div>
        </a>

        {/** widget */}
        <div className='break-inside flex items-start justify-between bg-yellow-50 rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='font-bold block'>Landescape</h5>
              <h5 className='font-bold block'>423Km</h5>
            </div>
          </div>
          <button className='inline-flex items-center justify-center p-2 transition-all rounded-full hover:bg-yellow-100'>
            <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-20 h-20 object-cover' src='https://randomuser.me/api/portraits/women/52.jpg' alt='avatar' />
          <div className='flex-auto'>
            <a href='#' className='no-underline font-bold block text-lg'>Maria</a>
          </div>
          <button className='inline-flex justify-center items-center rounded-full p-3 transition-all hover:bg-slate-100'>
            <svg viewBox='0 0 24 24' className='w-6 h-6'>
              <path fill='fill-slate-900' d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-20 h-20' src='https://randomuser.me/api/portraits/men/51.jpg' alt='avatar' />
          <div className='flex-auto'>
            <a href='#' className='no-underline font-bold block'>Jhonny</a>
          </div>
          <button className='inline-flex justify-center items-center rounded-md py-2 px-4 font-medium tracking-wide text-sm transition-all bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700'>Button</button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img className='w-10 h-10' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
            <div className='flex-auto space-y-1'>
              <h5 className='no-underline font-bold block'>Schedule your day</h5>
              <span className='text-slate-500 text-sm'>November, 22</span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <button type='button' className='inline-flex items-center justify-center rounded-full w-8 h-8 bg-violet-600'>
              <svg className='w-5 h-5' viewBox='0 0 15 15' fill='none'>
                <path className='fill-white' d='M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z' fill='black' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-[#00f5f9] text-black rounded-xl overflow-hidden pr-4 mb-4'>
          <div className='flex flex-1 flex-col p-4'>
            <div className='font-bold block text-lg'> New </div>
            <div className='font-bold block text-lg'> Releases </div>
          </div>
          <img class='flex-none w-24 h-24 object-cover rotate-12 rounded-full -mb-8 -mr-10' src='https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cover' />
        </div>

        {/** widget */}
        <a href='#' className='break-inside flex items-center justify-center space-x-4 bg-slate-100 rounded-xl overflow-hidden transition-all p-8 mb-4'>
          <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
            <path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
          </svg>
          <span className='text-slate-800 font-semibold'>New project</span>
        </a>

        {/** widget */}
        <a href='#' className='break-inside overflow-hidden flex bg-gradient-to-r from-[#EC008C] to-[#FC6767] rounded-full mb-4'>
          <div className='flex-1 items-center relative'>
            <div className='absolute -right-1 top-2'>
              <img class='flex-none w-20 h-20 rounded-2xl object-cover rotate-6' src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            </div>
            <div className='mr-auto px-8 py-4'>
              <h5 className='font-bold text-md text-white'>Best music</h5>
              <h3 className='font-extrabold text-xl text-white'>Summer 2021</h3>
            </div>
          </div>
        </a>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-yellow-100 rounded-full p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='overflow-hidden rounded-full border-2 border-black'>
              <img class='flex-none w-12 h-12 rounded-full object-cover border-2 border-white' src='https://randomuser.me/api/portraits/men/3.jpg' alt='avatar' />
            </div>
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Marc Andress</a>
              <span className='text-slate-600 text-sm'>Web designer</span>
            </div>
          </div>
          <button className='no-underline inline-block rounded-full p-2 bg-[#00C1EB] text-white'>
            <svg height='20' width='20' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-transparent rounded-xl p-1 mb-4 border-2 border-dashed border-slate-400'>
          <div className='bg-white rounded-xl w-full p-4 text-center'>
            <span className='font-medium text-slate-500'>Drag image here</span>
          </div>
        </div>

        {/** widget */}
        <div className='relative break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4 overflow-hidden border-2 border-black'>
          <div className='absolute bg-pink-100 top-0 bottom-0 left-0 w-4/6' />
          <div className='flex items-center space-x-4 relative'>
            <img class='flex-none w-24 h-18 rounded-xl object-cover' src='https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='text-black text-lg font-bold'>Warning</h5>
              <h5 className='no-underline block text-sm'>Rhemi, Lynn, Lockamy</h5>
            </div>
          </div>
          <div className='flex flex-col items-center relative'>
            <button>
              <svg viewBox='0 0 24 24' height='36' width='36'>
                <path fill='#e600a8' d='M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex rounded-2xl p-4 mb-4 bg-cyan-100'>
          <div className='flex items-start space-x-4'>
            <div className='rounded-full bg-cyan-500 flex items-center justify-center w-10 h-10 text-white'>
              <svg width='24' height='24' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M15.5343 3.45429L13.5043 5.48571C12.5027 4.70607 11.2692 4.28368 10 4.28571C8.73076 4.28368 7.49728 4.70607 6.49571 5.48571L4.46571 3.45429C6.01154 2.14353 7.97327 1.42548 10 1.42857C12.11 1.42857 14.0429 2.19143 15.5343 3.45429ZM16.5457 4.46571C17.8565 6.01154 18.5745 7.97327 18.5714 10C18.5714 12.11 17.8086 14.0429 16.5457 15.5343L14.5143 13.5043C15.2657 12.5357 15.7143 11.32 15.7143 10C15.7143 8.68 15.2657 7.46428 14.5143 6.49571L16.5457 4.46571ZM15.5343 16.5457C13.9885 17.8565 12.0267 18.5745 10 18.5714C7.89 18.5714 5.95714 17.8086 4.46571 16.5457L6.49571 14.5143C7.49728 15.2939 8.73076 15.7163 10 15.7143C11.32 15.7143 12.5357 15.2657 13.5043 14.5143L15.5343 16.5457ZM3.45429 15.5343C2.14353 13.9885 1.42548 12.0267 1.42857 10C1.42857 7.89 2.19143 5.95714 3.45429 4.46571L5.48571 6.49571C4.70607 7.49728 4.28368 8.73076 4.28571 10C4.28571 11.32 4.73429 12.5357 5.48571 13.5043L3.45429 15.5343ZM12.7686 6.72857C12.9497 6.88216 13.1178 7.05034 13.2714 7.23143C13.9043 7.97857 14.2857 8.94571 14.2857 10C14.2869 10.623 14.1517 11.2386 13.8896 11.8038C13.6275 12.3689 13.2449 12.8699 12.7686 13.2714C11.9954 13.9275 11.014 14.2871 10 14.2857C9.37703 14.2869 8.76136 14.1517 8.19621 13.8896C7.63106 13.6275 7.13012 13.2449 6.72857 12.7686C6.09571 12.0214 5.71429 11.0543 5.71429 10C5.71313 9.37703 5.84834 8.76136 6.11043 8.19621C6.37253 7.63106 6.75514 7.13012 7.23143 6.72857C7.97857 6.09571 8.94571 5.71428 10 5.71428C11.0557 5.71428 12.0214 6.09571 12.7686 6.72857ZM10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34783 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0Z' fill='white' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Quick help</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex rounded-2xl p-4 mb-4 bg-green-100'>
          <div className='flex items-start space-x-4'>
            <div className='rounded-full bg-green-500 flex items-center justify-center w-10 h-10 text-white'>
              <svg width='16' height='20' viewBox='0 0 14 18' fill='none'>
                <path d='M11.235 11.205C11.0075 11.0388 10.6925 10.6538 10.5437 10.47C11.585 9.00875 13.125 6.26125 13.125 2.875C13.125 1.16875 12.4775 0.25 11.375 0.25C10.0275 0.25 7.91 2.0525 7 5.47375C6.09 2.0525 3.9725 0.25 2.625 0.25C1.5225 0.25 0.875 1.16875 0.875 2.875C0.875 6.26125 2.415 9.00875 3.45625 10.47C3.3075 10.6538 2.9925 11.0388 2.765 11.205C2.3275 11.5638 1.3125 12.4038 1.3125 13.8125C1.3125 15.7463 2.87875 17.3125 4.8125 17.3125C6.16875 17.3125 7 16.8225 7 16.8225C7 16.8225 7.83125 17.3125 9.1875 17.3125C11.1213 17.3125 12.6875 15.7463 12.6875 13.8125C12.6875 12.4038 11.6725 11.5638 11.235 11.205ZM4.68125 9.175C3.7975 7.8625 2.625 5.605 2.625 2.875C2.625 2.44625 2.6775 2.175 2.73 2.02625C3.5525 2.2975 5.565 4.3975 5.6875 8.71125C5.27625 8.81625 4.9525 8.97375 4.68125 9.175ZM5.6875 13.1562C5.4425 13.1562 5.25 12.8588 5.25 12.5C5.25 12.1412 5.4425 11.8438 5.6875 11.8438C5.9325 11.8438 6.125 12.1412 6.125 12.5C6.125 12.8588 5.9325 13.1562 5.6875 13.1562ZM7 15.5625C6.51875 15.5625 6.125 14.9325 6.125 14.6875C6.125 14.4425 6.51875 14.25 7 14.25C7.48125 14.25 7.875 14.4425 7.875 14.6875C7.875 14.9325 7.48125 15.5625 7 15.5625ZM8.3125 13.1562C8.0675 13.1562 7.875 12.8588 7.875 12.5C7.875 12.1412 8.0675 11.8438 8.3125 11.8438C8.5575 11.8438 8.75 12.1412 8.75 12.5C8.75 12.8588 8.5575 13.1562 8.3125 13.1562ZM8.3125 8.71125C8.435 4.3975 10.4475 2.2975 11.27 2.02625C11.3225 2.175 11.375 2.44625 11.375 2.875C11.375 5.605 10.2025 7.8625 9.31875 9.175C9.0475 8.97375 8.72375 8.81625 8.3125 8.71125Z' fill='white' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Free giveway</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex rounded-2xl p-4 mb-4 bg-yellow-100'>
          <div className='flex items-start space-x-4'>
            <div className='rounded-full bg-yellow-500 flex items-center justify-center w-10 h-10 text-white'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M22 19H2V21H22V19M4 15C4 15.5 4.2 16 4.6 16.4C5 16.8 5.5 17 6 17V6C5.5 6 5 6.2 4.6 6.6C4.2 7 4 7.5 4 8V15M13.5 6H10.5C10.5 5.6 10.6 5.2 10.9 4.9C11.2 4.6 11.5 4.5 12 4.5C12.4 4.5 12.8 4.6 13.1 4.9C13.3 5.2 13.5 5.6 13.5 6M7 6V17H17V6H15C15 5.2 14.7 4.5 14.1 3.9S12.8 3 12 3C11.2 3 10.5 3.3 9.9 3.9C9.3 4.5 9 5.2 9 6H7M18 17C18.5 17 19 16.8 19.4 16.4C19.8 16 20 15.5 20 15V8C20 7.5 19.8 7 19.4 6.6C19 6.2 18.5 6 18 6V17Z' fill='currentColor' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Short trip</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <input type='text' className='rounded-full pl-12 pr-9 py-3 bg-white w-full h-12' placeholder='Search' />
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
          <input type='text' className='rounded-full pl-12 pr-16 py-3 bg-white w-full h-12' placeholder='Search' />
          <button className='absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-100 rounded-full'>
            <svg width='22' height='22' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M9 17.375C6.91142 17.375 4.90838 16.5453 3.43153 15.0685C1.95468 13.5916 1.125 11.5886 1.125 9.5C1.125 7.41142 1.95468 5.40838 3.43153 3.93153C4.90838 2.45468 6.91142 1.625 9 1.625C11.0886 1.625 13.0916 2.45468 14.5685 3.93153C16.0453 5.40838 16.875 7.41142 16.875 9.5C16.875 11.5886 16.0453 13.5916 14.5685 15.0685C13.0916 16.5453 11.0886 17.375 9 17.375ZM9 18.5C11.3869 18.5 13.6761 17.5518 15.364 15.864C17.0518 14.1761 18 11.8869 18 9.5C18 7.11305 17.0518 4.82387 15.364 3.13604C13.6761 1.44821 11.3869 0.5 9 0.5C6.61305 0.5 4.32387 1.44821 2.63604 3.13604C0.948212 4.82387 0 7.11305 0 9.5C0 11.8869 0.948212 14.1761 2.63604 15.864C4.32387 17.5518 6.61305 18.5 9 18.5Z' fill='black' />
              <path d='M7.875 13.4375C7.875 13.2883 7.93426 13.1452 8.03975 13.0398C8.14524 12.9343 8.28832 12.875 8.4375 12.875H9.5625C9.71168 12.875 9.85476 12.9343 9.96025 13.0398C10.0657 13.1452 10.125 13.2883 10.125 13.4375C10.125 13.5867 10.0657 13.7298 9.96025 13.8352C9.85476 13.9407 9.71168 14 9.5625 14H8.4375C8.28832 14 8.14524 13.9407 8.03975 13.8352C7.93426 13.7298 7.875 13.5867 7.875 13.4375ZM5.625 10.0625C5.625 9.91332 5.68426 9.77024 5.78975 9.66475C5.89524 9.55926 6.03832 9.5 6.1875 9.5H11.8125C11.9617 9.5 12.1048 9.55926 12.2102 9.66475C12.3157 9.77024 12.375 9.91332 12.375 10.0625C12.375 10.2117 12.3157 10.3548 12.2102 10.4602C12.1048 10.5657 11.9617 10.625 11.8125 10.625H6.1875C6.03832 10.625 5.89524 10.5657 5.78975 10.4602C5.68426 10.3548 5.625 10.2117 5.625 10.0625ZM3.375 6.6875C3.375 6.53832 3.43426 6.39524 3.53975 6.28975C3.64524 6.18426 3.78832 6.125 3.9375 6.125H14.0625C14.2117 6.125 14.3548 6.18426 14.4602 6.28975C14.5657 6.39524 14.625 6.53832 14.625 6.6875C14.625 6.83668 14.5657 6.97976 14.4602 7.08525C14.3548 7.19074 14.2117 7.25 14.0625 7.25H3.9375C3.78832 7.25 3.64524 7.19074 3.53975 7.08525C3.43426 6.97976 3.375 6.83668 3.375 6.6875Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
          <input type='text' className='rounded-full pl-12 pr-16 py-3 bg-white w-full h-12' placeholder='Search' />
          <button className='absolute right-5 top-1/2 -translate-y-1/2'>
            <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M5.9375 2.90216C5.62256 2.90216 5.32051 3.02854 5.09781 3.25351C4.87511 3.47848 4.75 3.78361 4.75 4.10176C4.75 4.41992 4.87511 4.72504 5.09781 4.95001C5.32051 5.17498 5.62256 5.30137 5.9375 5.30137C6.25244 5.30137 6.55449 5.17498 6.77719 4.95001C6.99989 4.72504 7.125 4.41992 7.125 4.10176C7.125 3.78361 6.99989 3.47848 6.77719 3.25351C6.55449 3.02854 6.25244 2.90216 5.9375 2.90216ZM2.57688 2.90216C2.82221 2.19975 3.27719 1.5915 3.87909 1.16127C4.48098 0.731039 5.20017 0.5 5.9375 0.5C6.67483 0.5 7.39402 0.731039 7.99591 1.16127C8.59781 1.5915 9.05278 2.19975 9.29813 2.90216H17.8125C18.1274 2.90216 18.4295 3.02854 18.6522 3.25351C18.8749 3.47848 19 3.78361 19 4.10176C19 4.41992 18.8749 4.72504 18.6522 4.95001C18.4295 5.17498 18.1274 5.30137 17.8125 5.30137H9.29813C9.05278 6.00378 8.59781 6.61202 7.99591 7.04226C7.39402 7.47249 6.67483 7.70353 5.9375 7.70353C5.20017 7.70353 4.48098 7.47249 3.87909 7.04226C3.27719 6.61202 2.82221 6.00378 2.57688 5.30137H1.1875C0.872555 5.30137 0.57051 5.17498 0.347811 4.95001C0.125111 4.72504 0 4.41992 0 4.10176C0 3.78361 0.125111 3.47848 0.347811 3.25351C0.57051 3.02854 0.872555 2.90216 1.1875 2.90216H2.57688ZM13.0625 13.6986C12.7476 13.6986 12.4455 13.825 12.2228 14.05C12.0001 14.275 11.875 14.5801 11.875 14.8982C11.875 15.2164 12.0001 15.5215 12.2228 15.7465C12.4455 15.9715 12.7476 16.0978 13.0625 16.0978C13.3774 16.0978 13.6795 15.9715 13.9022 15.7465C14.1249 15.5215 14.25 15.2164 14.25 14.8982C14.25 14.5801 14.1249 14.275 13.9022 14.05C13.6795 13.825 13.3774 13.6986 13.0625 13.6986ZM9.70187 13.6986C9.94722 12.9962 10.4022 12.388 11.0041 11.9577C11.606 11.5275 12.3252 11.2965 13.0625 11.2965C13.7998 11.2965 14.519 11.5275 15.1209 11.9577C15.7228 12.388 16.1778 12.9962 16.4231 13.6986H17.8125C18.1274 13.6986 18.4295 13.825 18.6522 14.05C18.8749 14.275 19 14.5801 19 14.8982C19 15.2164 18.8749 15.5215 18.6522 15.7465C18.4295 15.9715 18.1274 16.0978 17.8125 16.0978H16.4231C16.1778 16.8003 15.7228 17.4085 15.1209 17.8387C14.519 18.269 13.7998 18.5 13.0625 18.5C12.3252 18.5 11.606 18.269 11.0041 17.8387C10.4022 17.4085 9.94722 16.8003 9.70187 16.0978H1.1875C0.872555 16.0978 0.57051 15.9715 0.347811 15.7465C0.125111 15.5215 0 15.2164 0 14.8982C0 14.5801 0.125111 14.275 0.347811 14.05C0.57051 13.825 0.872555 13.6986 1.1875 13.6986H9.70187Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
          <input type='text' className='rounded-full pl-12 pr-16 py-3 bg-white w-full h-12' placeholder='Search' />
          <button className='absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-yellow-300 rounded-full'>
            <svg width='22' height='22' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M9 17.375C6.91142 17.375 4.90838 16.5453 3.43153 15.0685C1.95468 13.5916 1.125 11.5886 1.125 9.5C1.125 7.41142 1.95468 5.40838 3.43153 3.93153C4.90838 2.45468 6.91142 1.625 9 1.625C11.0886 1.625 13.0916 2.45468 14.5685 3.93153C16.0453 5.40838 16.875 7.41142 16.875 9.5C16.875 11.5886 16.0453 13.5916 14.5685 15.0685C13.0916 16.5453 11.0886 17.375 9 17.375ZM9 18.5C11.3869 18.5 13.6761 17.5518 15.364 15.864C17.0518 14.1761 18 11.8869 18 9.5C18 7.11305 17.0518 4.82387 15.364 3.13604C13.6761 1.44821 11.3869 0.5 9 0.5C6.61305 0.5 4.32387 1.44821 2.63604 3.13604C0.948212 4.82387 0 7.11305 0 9.5C0 11.8869 0.948212 14.1761 2.63604 15.864C4.32387 17.5518 6.61305 18.5 9 18.5Z' fill='black' />
              <path d='M7.875 13.4375C7.875 13.2883 7.93426 13.1452 8.03975 13.0398C8.14524 12.9343 8.28832 12.875 8.4375 12.875H9.5625C9.71168 12.875 9.85476 12.9343 9.96025 13.0398C10.0657 13.1452 10.125 13.2883 10.125 13.4375C10.125 13.5867 10.0657 13.7298 9.96025 13.8352C9.85476 13.9407 9.71168 14 9.5625 14H8.4375C8.28832 14 8.14524 13.9407 8.03975 13.8352C7.93426 13.7298 7.875 13.5867 7.875 13.4375ZM5.625 10.0625C5.625 9.91332 5.68426 9.77024 5.78975 9.66475C5.89524 9.55926 6.03832 9.5 6.1875 9.5H11.8125C11.9617 9.5 12.1048 9.55926 12.2102 9.66475C12.3157 9.77024 12.375 9.91332 12.375 10.0625C12.375 10.2117 12.3157 10.3548 12.2102 10.4602C12.1048 10.5657 11.9617 10.625 11.8125 10.625H6.1875C6.03832 10.625 5.89524 10.5657 5.78975 10.4602C5.68426 10.3548 5.625 10.2117 5.625 10.0625ZM3.375 6.6875C3.375 6.53832 3.43426 6.39524 3.53975 6.28975C3.64524 6.18426 3.78832 6.125 3.9375 6.125H14.0625C14.2117 6.125 14.3548 6.18426 14.4602 6.28975C14.5657 6.39524 14.625 6.53832 14.625 6.6875C14.625 6.83668 14.5657 6.97976 14.4602 7.08525C14.3548 7.19074 14.2117 7.25 14.0625 7.25H3.9375C3.78832 7.25 3.64524 7.19074 3.53975 7.08525C3.43426 6.97976 3.375 6.83668 3.375 6.6875Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <input type='text' className='rounded-full pl-5 pr-16 py-3 bg-white w-full h-12' placeholder='Phone number' />
          <button className='absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-green-200 rounded-xl'>
            <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M10.5948 4.89827L10.3934 4.70676C9.8948 4.18966 9.98111 3.95027 10.4702 3.46191L13.0784 0.828574C13.8551 0.0433618 13.999 -0.330093 14.7373 0.368938L14.9387 0.560453L10.5948 4.89827ZM11.103 5.32918L15.3223 1.11585C15.9935 2.01597 17.5661 4.43863 16.7894 6.2293C16.0894 7.82845 15.7442 7.90506 14.8716 9.10203C13.0976 11.1225 10.8633 13.2866 9.11808 14.9145C7.90985 15.7859 7.8619 16.1881 6.24133 16.8297C4.51529 17.5095 2.02211 15.9774 1.08237 15.3358L5.3016 11.1225L6.43312 12.6738C6.75915 13.1143 7.58382 12.6163 8.15917 12.0418C9.15644 11.0363 11.2085 8.99669 11.9948 8.14445C12.5606 7.57948 13.0688 6.75597 12.6277 6.42082L11.103 5.32918ZM0.535789 14.9528L0.334416 14.7517C-0.317646 14.0431 0.0563309 13.8899 0.833052 13.1238L3.46048 10.5192C3.94953 10.05 4.17967 9.94469 4.6783 10.4139L4.87009 10.615L0.535789 14.9528Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex justify-between items-center mb-4 bg-white rounded-full p-3 relative'>
          <div className='flex items-center space-x-2'>
            <img className='w-9 h-9 rounded-full' src='https://avatars.githubusercontent.com/u/35234895?v=4' alt='frankuxui' />
            <a href='#' className='font-medium'>@frankuxui</a>
          </div>
          <div className='border-2 border-slate-300 h-4 rounded-sm' />
          <div className='flex items-center space-x-2 justify-between'>
            <span>12 Followers</span>
            <svg width='22' height='22' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' />
            </svg>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex justify-between items-center mb-4 bg-white rounded-full p-3 relative'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center space-x-2'>
              <svg width='20' height='20' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' />
              </svg>
              <div className='font-bold text-sm bg-blue-100 text-blue-600 rounded-md py-[3px] px-1'>04:32</div>
            </div>
            <div className='border-2 border-slate-300 h-4 rounded-sm' />
            <div className='font-medium text-sm'>Installation...</div>
            <div className='border-2 border-slate-300 h-4 rounded-sm' />
            <svg width='22' height='22' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M9,9H15V15H9' />
            </svg>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center justify-center flex-none w-12 h-12 rounded-full bg-[#DDFBFF]'>
              <svg className='text-slate-800' width='22' height='22' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='font-bold block'>Apple store</h5>
              <h5 className='block text-sm'>16 January - 3:25 PM</h5>
            </div>
          </div>
          <div className='inline-flex flex-col items-center space-y-1'>
            <span className='font-bold'>-$327.68</span>
            <svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0.700422 0.500001H13.3008C13.4284 0.500268 13.5534 0.523766 13.6625 0.567966C13.7715 0.612164 13.8605 0.675391 13.9197 0.750839C13.979 0.826288 14.0063 0.911102 13.9988 0.996151C13.9912 1.0812 13.9491 1.16326 13.8769 1.23351L7.57672 7.31101C7.31561 7.563 6.68699 7.563 6.42518 7.31101L0.125005 1.23351C0.0520805 1.16341 0.00931579 1.08131 0.00135729 0.996115C-0.00660121 0.910924 0.0205509 0.825906 0.0798637 0.750297C0.139176 0.674689 0.228381 0.611381 0.337786 0.567254C0.447191 0.523126 0.572612 0.499866 0.700422 0.500001Z' fill='#E31414' />
            </svg>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <svg className='text-slate-800' width='22' height='22' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z' />
            </svg>
            <div className='flex-auto'>
              <h5 className='font-bold block'>Unlimited</h5>
            </div>
          </div>
          <div className='inline-flex flex-col items-center space-y-1'>
            <svg width='98' height='26' viewBox='0 0 88 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M82.9613 6.40709L84.8427 10.9549H84.8648L86.7017 6.40692H88L84.0397 15.5359H82.8077L84.2818 12.3424L81.6745 6.40692L82.9613 6.40709ZM78.693 6.19788C79.573 6.19788 80.2658 6.42911 80.772 6.90257C81.2782 7.37621 81.5312 8.01483 81.5312 8.84081V12.75H80.3978V11.8691H80.3431C79.8481 12.5958 79.1988 12.9592 78.3845 12.9592C77.6916 12.9592 77.1085 12.75 76.6356 12.3426C76.1623 11.9242 75.9313 11.4067 75.9313 10.7899C75.9313 10.1401 76.1735 9.61156 76.6796 9.22601C77.1746 8.84064 77.8346 8.64244 78.6596 8.64244C79.3636 8.64244 79.9468 8.77474 80.409 9.02782V8.75255C80.409 8.33414 80.244 7.99281 79.914 7.69552C79.584 7.40907 79.1988 7.26593 78.7588 7.26593C78.0988 7.26593 77.5708 7.5412 77.1855 8.10292L76.1405 7.44227C76.7125 6.61629 77.571 6.19788 78.693 6.19788ZM72.686 3.47788C73.4891 3.47788 74.1713 3.74214 74.7321 4.28184C75.3041 4.82137 75.5793 5.471 75.5793 6.23092C75.5793 7.01268 75.2931 7.6735 74.7321 8.191C74.1819 8.71969 73.5001 8.98395 72.686 8.98395H70.7278V12.739H69.5394V3.47788H72.686ZM78.8468 9.57853C78.3628 9.57853 77.9668 9.69965 77.6365 9.93087C77.3175 10.1731 77.1525 10.4596 77.1525 10.8009C77.1525 11.1092 77.2845 11.3735 77.5485 11.5716C77.8125 11.781 78.1205 11.8801 78.4725 11.8801C78.9676 11.8801 79.4188 11.6929 79.8148 11.3296C80.2108 10.955 80.3978 10.5256 80.3978 10.019C80.024 9.72167 79.5068 9.57853 78.8468 9.57853ZM72.7186 4.63401H70.7276V7.86068H72.7186C73.192 7.86068 73.588 7.70653 73.896 7.38722C74.2151 7.06791 74.3689 6.69337 74.3689 6.25294C74.3689 5.82352 74.2151 5.44898 73.896 5.12967C73.588 4.79935 73.192 4.63401 72.7186 4.63401ZM52.7512 6.2089C53.5542 6.2089 54.1925 6.56124 54.5227 6.95763H54.5774V6.40709H55.9857V12.4637C55.9857 14.9525 54.5227 15.9766 52.7845 15.9766C51.156 15.9766 50.177 14.8754 49.8029 13.9833L51.0902 13.4438C51.321 13.9944 51.8822 14.6442 52.7845 14.6442C53.8955 14.6442 54.5774 13.9503 54.5774 12.6619V12.1774H54.5227C54.1925 12.5848 53.5542 12.9482 52.7512 12.9482C51.068 12.9482 49.528 11.4836 49.528 9.58954C49.528 7.68451 51.068 6.2089 52.7512 6.2089ZM62.4328 6.21991C64.1821 6.21991 65.0291 7.60743 65.3151 8.36718L65.4691 8.75255L60.9696 10.6137C61.3106 11.2855 61.8496 11.6379 62.5976 11.6379C63.3461 11.6159 63.8741 11.2525 64.2589 10.6908L65.4029 11.4615C65.0291 12.0123 64.1379 12.9593 62.5976 12.9593C60.6834 12.9593 59.2644 11.4837 59.2644 9.58954C59.2644 7.58524 60.7056 6.21991 62.4328 6.21991ZM29.4953 2.48692C31.0903 2.48692 32.2235 3.11453 33.0707 3.9295L32.0585 4.94249C31.4425 4.36993 30.6173 3.91849 29.4842 3.91849C27.383 3.91849 25.7328 5.61431 25.7328 7.71771C25.7328 9.82094 27.372 11.5168 29.4842 11.5168C30.8483 11.5168 31.6295 10.9662 32.1245 10.4707C32.5317 10.0632 32.7957 9.47961 32.9057 8.67565H29.4513V7.24425H34.2918C34.3468 7.49733 34.3688 7.8058 34.3688 8.13612C34.3688 9.20434 34.0718 10.5366 33.1365 11.4837C32.2125 12.4418 31.0465 12.9483 29.4953 12.9483C26.613 12.9483 24.1926 10.6027 24.1926 7.71771C24.1926 4.83255 26.6128 2.48692 29.4953 2.48692ZM38.2417 6.2089C40.101 6.2089 41.619 7.62945 41.619 9.57853C41.619 11.5168 40.101 12.9482 38.2417 12.9482C36.3825 12.9482 34.8644 11.5168 34.8644 9.57853C34.8644 7.62928 36.3825 6.2089 38.2417 6.2089ZM45.5902 6.2089C47.4494 6.2089 48.9676 7.62945 48.9676 9.57853C48.9676 11.5168 47.4494 12.9482 45.5902 12.9482C43.7309 12.9482 42.2125 11.5168 42.2125 9.57853C42.2125 7.62928 43.7309 6.2089 45.5902 6.2089ZM58.5274 2.83926V12.7391H57.0532V2.83926H58.5274ZM38.2527 7.5412C37.2407 7.5412 36.3604 8.36718 36.3604 9.57853C36.3604 10.7789 37.2407 11.6159 38.2527 11.6159C39.2649 11.6159 40.145 10.7789 40.145 9.57853C40.145 8.36735 39.2649 7.5412 38.2527 7.5412ZM45.5902 7.5412C44.5779 7.5412 43.6979 8.36718 43.6979 9.57853C43.6979 10.7789 44.5779 11.6159 45.5902 11.6159C46.6022 11.6159 47.4822 10.7789 47.4822 9.57853C47.4822 8.36735 46.6022 7.5412 45.5902 7.5412ZM52.8942 7.53036C51.8712 7.53036 51.0242 8.40021 51.0242 9.58971C51.0242 10.7679 51.8822 11.6159 52.8942 11.6159C53.8955 11.6159 54.6876 10.7679 54.6876 9.58954C54.6876 8.40021 53.8955 7.53036 52.8942 7.53036ZM62.4768 7.50834C61.7288 7.50834 60.6834 8.17999 60.7274 9.47943L63.7309 8.22404C63.5659 7.80563 63.0709 7.50834 62.4768 7.50834Z' fill='#5F6368' />
              <path d='M16.3905 2.99892C14.6104 1.97044 12.3343 2.58154 11.3058 4.36322L8.71272 8.85956C7.96248 10.1578 8.92842 10.6115 10.0054 11.2578L12.5005 12.6996C13.3454 13.1873 14.4246 12.8976 14.9119 12.053L17.5777 7.43229C18.4732 5.87961 17.9417 3.89543 16.3905 2.99892Z' fill='#EA4335' />
              <path d='M13.4565 4.85991L10.9615 3.41836C9.58412 2.65311 8.80415 2.60236 8.23868 3.50214L4.55884 9.88132C3.53103 11.662 4.1429 13.9391 5.92181 14.9655C7.47298 15.8619 9.45539 15.3299 10.351 13.7772L14.1013 7.2747C14.5908 6.42894 14.3014 5.34765 13.4565 4.85991Z' fill='#FBBC04' />
              <path d='M12.1842 0.567262C10.2458 -0.552394 7.76723 0.111692 6.6485 2.05217L3.31172 7.83625C2.81878 8.68958 3.11148 9.78206 3.96415 10.2744L5.92679 11.4086C6.896 11.9692 8.1347 11.6365 8.69467 10.6664L12.5067 4.05819C13.2965 2.68924 15.0446 2.22008 16.412 3.01079L12.1842 0.567262Z' fill='#34A853' />
              <path d='M7.12253 3.70687L5.22795 2.6144C4.38301 2.12786 3.30381 2.41621 2.81654 3.25973L0.543667 7.19109C-0.575239 9.12606 0.0881985 11.6014 2.02643 12.7183L5.97698 14.9955C4.62948 14.0926 4.20151 12.2832 5.02548 10.8584L7.76929 6.11324C8.25535 5.27195 7.96643 4.19358 7.12253 3.70687Z' fill='#4285F4' />
            </svg>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col justify-between bg-white space-y-2 rounded-xl p-4 mb-4'>
          <div className='flex flex-row items-center justify-between'>
            <span className='font-bold block text-sm'>Transaction</span>
            <span className='font-bold block text-sm'>$8.347 / $23.892</span>
          </div>
          <div>
            <div className='relative w-full h-2 bg-slate-100 rounded-md overflow-hidden'>
              <div className='absolute left-0 w-1/3 h-full bg-pink-500' />
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside relative overflow-hidden flex flex-col justify-between bg-white space-y-2 rounded-xl p-4 mb-4'>
          <div className='flex flex-row items-center space-x-2'>
            <svg width='38' height='38' viewBox='0 0 24 24'>
              <path fill='#1ED760' d='M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
            </svg>
            <span className='font-bold block'>Enjoy songs</span>
          </div>
          <div className='absolute -right-4 -top-4 rounded-full w-24 h-24 bg-green-100' />
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            <div className='flex-auto space-y-1'>
              <span className='text-slate-600'>Mountains</span>
              <h5 className='no-underline font-bold block'>423Km, 3 Week</h5>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img className='w-8 h-8' src='https://www.svgrepo.com/show/287721/cloudy-sun-rays.svg' />
          </div>
        </div>

        {/** widget */}
        <div className='break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center'>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='no-underline font-bold block text-sm'>Mon</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/400800/sunraincloud.svg' />
              <span className='no-underline font-bold block text-sm'>Tue</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='no-underline font-bold block text-sm'>Wed</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/400797/sunbehindcloud.svg' />
              <span className='no-underline font-bold block text-sm'>Thu</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402761/sun-behind-small-cloud.svg' />
              <span className='no-underline font-bold block text-sm'>Fri</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <a href='#' className='break-inside flex flex-row items-center justify-between bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-xl p-4 mb-4'>
          <div className='mr-auto'>
            <h3 className='font-bold text-xl text-white'>Seatle</h3>
            <h5 className='text-white'>Cloudy</h5>
          </div>
          <span className='text-4xl font-bold text-white'>32°</span>
          <svg className='w-10 h-10 ml-auto' viewBox='0 0 36 36' preserveAspectRatio='xMidYMid meet'><path className='fill-[#FFE600]' d='M14 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm16 12s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 14s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm3.872-7.957s1.414 1.414 0 2.828s-2.828 0-2.828 0L3.629 7.458s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm19.085 2.828s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414z' /><circle className='fill-[#FFE600]' cx='16' cy='16' r='9' /><path className='fill-white stroke' d='M28 20c-.825 0-1.62.125-2.369.357A6.498 6.498 0 0 0 19.5 16c-3.044 0-5.592 2.096-6.299 4.921A4.459 4.459 0 0 0 10.5 20A4.5 4.5 0 0 0 6 24.5c0 .604.123 1.178.339 1.704A4.98 4.98 0 0 0 5 26c-2.762 0-5 2.238-5 5s2.238 5 5 5h23a8 8 0 1 0 0-16z' /></svg>
        </a>

        {/** widget */}
        <div className='break-inside flex flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex justify-between items-start mb-4'>
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Great day to schedule</a>
              <span className='text-slate-600'>Your usual hours</span>
            </div>
            <button className='items-center justify-center'>
              <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
              </svg>
            </button>
          </div>
          <div className='flex items-center'>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='text-sm font-bold block'>Mon</span>
              <span className='text-xs font-normal'>02:27 PM</span>
            </div>
            <div className='flex-auto text-center space-y-1 rounded-md bg-blue-50 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/400800/sunraincloud.svg' />
              <span className='text-sm font-bold block'>Tue</span>
              <span className='text-xs font-normal'>06:00 AM</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='text-sm font-bold block'>Wed</span>
              <span className='text-xs font-normal'>07:30 PM</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/400797/sunbehindcloud.svg' />
              <span className='text-sm font-bold block'>Thu</span>
              <span className='text-xs font-normal'>12:00 PM</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/402761/sun-behind-small-cloud.svg' />
              <span className='text-sm font-bold block'>Fri</span>
              <span className='text-xs font-normal'>04:00 PM</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-start space-x-4'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between items-center'>
                <h5 className='no-underline font-bold text-lg text-purple-600'>Figma Shot</h5>
                <button className='inline-flex items-center justify-center p-1 transition-all rounded-full hover:bg-gray-100'>
                  <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
                  </svg>
                </button>
              </div>
              <p className='mr-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</p>
              <div className='my-3'>
                <div className='relative w-full cursor-pointer'>
                  <span className='absolute left-[33%] bg-purple-500 rounded-full w-4 h-4 z-10 top-1/2 -translate-y-1/2' />
                  <div className='relative w-full h-2 bg-slate-100 rounded-md overflow-hidden'>
                    <div className='absolute left-0 w-1/3 h-full bg-purple-500' />
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-between items-center mt-1'>
                <div className='flex flex-row justify-start items-center'>
                  <svg className='text-slate-800 mr-2' height='18' width='18' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7Z' />
                  </svg>
                  <span className='text-sm text-[#556878]'>Wed 23, 06:30 PM, 2022</span>
                </div>
                <span className='font-bold'>26%</span>
              </div>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='relative break-inside flex items-center justify-between rounded-xl mb-4 gap-4'>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Mon</span>
            <span className='text-xs font-normal'>10</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-pink-500 text-white'>
            <span className='text-sm font-bold block'>Tue</span>
            <span className='text-xs font-normal'>11</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Wed</span>
            <span className='text-xs font-normal'>12</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Thu</span>
            <span className='text-xs font-normal'>13</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Fri</span>
            <span className='text-xs font-normal'>14</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-[#ff7300] text-white rounded-xl overflow-hidden pr-4 mb-4'>
          <div className='flex flex-1 flex-col p-4'>
            <div className='font-bold block text-lg'> Creadores </div>
            <div className='font-bold block text-lg'> de Tendencias </div>
          </div>
          <img class='flex-none w-20 h-20 object-cover rotate-12 rounded-lg -mb-6 -mr-6' src='https://randomuser.me/api/portraits/women/58.jpg' alt='avatar' />
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-28 h-full object-cover' src='https://images.pexels.com/photos/343701/pexels-photo-343701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
          <div className='flex-auto flex justify-between items-start'>
            <div className='flex flex-col'>
              <span className='font-bold text-md mb-2'>
                Pirates of the
                <br />
                caribbean
              </span>
              <small className='text-md text-gray-600'>2022 · Action · Runtime · 2h 5m</small>
            </div>
            <div className='flex justify-center items-center'>
              <svg viewBox='0 0 24 24' className='mr-2' width='22' height='22'>
                <path fill='#ff00ea' d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z' />
              </svg>
              <span className='font-bold'>4.95</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex-auto'>
              <button type='button' className='py-1 px-4 font-bold block text-md hover:bg-slate-100 rounded-md'>July 2022</button>
            </div>
            <div className='justify-center items-center'>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
                </svg>
              </button>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
              </svg>
            </button>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Mon</span>
              <span className='text-xs font-normal'>1</span>
            </div>
            <div className='flex-auto text-center space-y-1 rounded-md bg-[#11C0A1] text-white p-2'>
              <span className='text-sm font-bold block'>Tue</span>
              <span className='text-xs font-normal'>2</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Wed</span>
              <span className='text-xs font-normal'>3</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Thu</span>
              <span className='text-xs font-normal'>4</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Fri</span>
              <span className='text-xs font-normal'>5</span>
            </div>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex-auto'>
              <button type='button' className='py-1 px-4 font-bold block text-md hover:bg-slate-100 rounded-md'>Saturday 02</button>
            </div>
            <div className='justify-center items-center'>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
                </svg>
              </button>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
              </svg>
            </button>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2020</span>
            </div>
            <div className='flex-auto text-center space-y-1 rounded-md bg-[#11C0A1] text-white p-2'>
              <span className='text-sm font-bold block'>2021</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2022</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2023</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2024</span>
            </div>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-start space-x-4'>
            <svg width='50' height='50' viewBox='0 0 1024 1024' fill='#232f3e'>
              <circle cx='512' cy='512' r='512' />
              <path fill='white' d='M400.3 479.1c0 6.3.7 11.4 1.9 15.1 1.4 3.8 3.1 7.9 5.5 12.3.9 1.3 1.2 2.7 1.2 3.9 0 1.7-1 3.4-3.2 5.1l-10.7 7.1c-1.3.9-2.8 1.5-4.4 1.5-1.7 0-3.4-.9-5.1-2.4-2.3-2.5-4.3-5.1-6.1-8-1.9-3.3-3.7-6.6-5.3-10-13.3 15.7-30 23.5-50.1 23.5-14.3 0-25.7-4.1-34-12.2-8.3-8.2-12.6-19.1-12.6-32.7 0-14.5 5.1-26.2 15.5-35.1 10.4-8.9 24.2-13.3 41.7-13.3 5.8 0 11.8.5 18 1.4 6.3.9 12.8 2.2 19.6 3.8v-12.4c0-12.9-2.7-22-8-27.2-5.4-5.3-14.6-7.8-27.7-7.8-6 0-12.1.7-18.4 2.2s-12.4 3.4-18.4 5.8c-1.9.9-3.9 1.6-6 2.2-.9.3-1.8.4-2.7.5-2.4 0-3.6-1.7-3.6-5.3v-8.3c0-2.7.3-4.8 1.2-6 1.3-1.5 2.9-2.8 4.8-3.6 6-3.1 13.1-5.6 21.4-7.7 8.7-2.2 17.6-3.3 26.6-3.2 20.3 0 35.1 4.6 44.6 13.8 9.4 9.2 14.1 23.1 14.1 41.9v55.2l.2-.1zM331.2 505c5.6 0 11.4-1 17.5-3.1 6.1-2 11.6-5.8 16.2-10.9 2.7-3.2 4.8-6.8 5.8-10.9 1-4.1 1.7-9 1.7-14.8v-7.1c-5.2-1.3-10.4-2.2-15.7-2.9-5.3-.7-10.7-1-16-1-11.4 0-19.8 2.2-25.4 6.8-5.6 4.6-8.3 11.1-8.3 19.6 0 8 2 14 6.3 18 4.1 4.3 10 6.3 17.9 6.3zm136.7 18.4c-3.1 0-5.1-.5-6.5-1.7-1.4-1-2.6-3.4-3.6-6.6l-40-131.6c-.8-2.2-1.3-4.5-1.5-6.8 0-2.7 1.4-4.3 4.1-4.3h16.7c3.2 0 5.4.5 6.6 1.7 1.4 1 2.4 3.4 3.4 6.7l28.6 112.7 26.6-112.7c.9-3.4 1.9-5.6 3.2-6.7 2-1.3 4.4-1.9 6.8-1.7H526c3.2 0 5.5.5 6.8 1.7 1.3 1 2.6 3.4 3.2 6.7l26.9 114.1 29.5-114.1c1-3.4 2.2-5.6 3.4-6.7 2-1.3 4.3-1.9 6.6-1.7h15.9c2.7 0 4.3 1.4 4.3 4.3 0 .9-.2 1.7-.4 2.7-.3 1.5-.7 2.9-1.2 4.3l-41 131.6c-1 3.4-2.2 5.6-3.6 6.6-1.9 1.2-4.2 1.8-6.5 1.7h-14.7c-3.2 0-5.4-.5-6.8-1.7-1.3-1.2-2.5-3.4-3.2-6.8l-26.4-109.8L492.6 515c-.9 3.4-1.9 5.6-3.2 6.8-1.4 1.2-3.8 1.7-6.8 1.7l-14.7-.1zm218.8 4.6c-8.9 0-17.7-1-26.2-3.1-8.5-2-15.1-4.3-19.6-6.8-2.7-1.5-4.6-3.2-5.3-4.8-.7-1.5-1-3.1-1-4.8v-8.7c0-3.6 1.4-5.3 3.9-5.3 1 0 2 .2 3.1.5 1 .3 2.6 1 4.3 1.7 5.8 2.6 12.1 4.6 18.7 6 6.8 1.4 13.4 2 20.3 2 10.7 0 19.1-1.9 24.9-5.6 5.6-3.4 9-9.6 8.9-16.2.1-4.4-1.5-8.7-4.6-11.9-3.1-3.2-8.9-6.1-17.2-8.9l-24.7-7.7c-12.4-3.9-21.6-9.7-27.2-17.3-5.5-7.1-8.5-15.8-8.5-24.7 0-7.1 1.6-13.4 4.6-18.9 3.1-5.4 7.1-10.2 12.3-14 5.1-3.9 10.9-6.8 17.7-8.9 6.8-2 14-2.9 21.5-2.9 3.7 0 7.7.2 11.4.7 3.9.5 7.5 1.2 11.1 1.9 3.4.9 6.7 1.7 9.7 2.7 3.1 1 5.5 2 7.2 3.1 2 1 3.8 2.5 5.1 4.3 1.1 1.7 1.6 3.6 1.5 5.6v8c0 3.6-1.4 5.5-3.9 5.5-2.3-.3-4.5-1-6.5-2-10.3-4.5-21.4-6.8-32.7-6.6-9.7 0-17.4 1.5-22.7 4.8-5.3 3.2-8 8.2-8 15.1 0 4.8 1.7 8.9 5.1 12.1 3.4 3.2 9.7 6.5 18.7 9.4l24.2 7.6c12.2 3.9 21.1 9.4 26.4 16.4 5.3 7 7.8 15 7.8 23.8 0 7.3-1.5 14-4.4 19.8-3.1 5.8-7.2 10.9-12.4 15-5.3 4.3-11.6 7.3-18.9 9.5-7.9 2.4-15.9 3.6-24.6 3.6zm32.2 82.7c-56 41.4-137.4 63.3-207.4 63.3-98.1 0-186.5-36.3-253.2-96.6-5.3-4.8-.5-11.2 5.8-7.5 72.2 41.9 161.3 67.3 253.4 67.3 62.2 0 130.4-12.9 193.3-39.5 9.3-4.2 17.3 6.2 8.1 13zm23.3-26.5c-7.2-9.2-47.4-4.4-65.6-2.2-5.4.7-6.3-4.1-1.3-7.7 32-22.5 84.6-16 90.8-8.5 6.1 7.7-1.7 60.3-31.7 85.5-4.6 3.9-9 1.9-7-3.2 6.8-16.9 22-54.9 14.8-63.9z' />
            </svg>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold text-lg mb-2'>Amazon</h5>
              <div className='flex items-center'>
                <span className='mr-2 p-1 bg-slate-200 rounded-md'>
                  <svg width='16' height='16' viewBox='0 0 24 24'>
                    <path fill='#333' d='M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z' />
                  </svg>
                </span>
                <span className='mr-1 text-sm'>Last view july 23</span>
                <span>
                  <svg width='18' height='18' viewBox='0 0 24 24' className='mr-1'>
                    <path fill='#333' d='M20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5V20H4V13.5C4 9.91 6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8Z' />
                  </svg>
                </span>
                <span className='text-slate-400 text-sm'>03:12 PM</span>
              </div>
              <div className='mt-1'>
                <a href='#' className='text-blue-500 text-sm font-medium inline-flex items-center'>
                  If was not you?, click here
                  <svg width='20' height='20' viewBox='0 0 24 24' className='ml-2'>
                    <path fill='currentColor' d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
