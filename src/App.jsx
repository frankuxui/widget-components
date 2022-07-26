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
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
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
            <div className='absolute -right-3 -top-1'>
              <img class='flex-none w-24 h-24 rounded-2xl object-cover rotate-6' src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            </div>
            <div className='mr-auto p-4'>
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
              <div className='mt-1'>
                <input id='steps-range' type='range' min='0' max='26' defaultValue='2.5' step='0.5' className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
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
                <span className='mr-2 px-2 py-1 bg-slate-200 rounded-md'>
                  <svg width='16' height='16' viewBox='0 0 24 24'>
                    <path fill='#333' d='M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z' />
                  </svg>
                </span>
                <span className='mr-2 text-sm'>Last activity november 23</span>
                <span>
                  <svg width='18' height='18' viewBox='0 0 24 24' className='mr-2'>
                    <path fill='#333' d='M20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5V20H4V13.5C4 9.91 6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8Z' />
                  </svg>
                </span>
                <span className='text-slate-400 text-sm'>19:23 PM</span>
              </div>
              <div className='mt-1'>
                <a href='#' className='text-blue-500 text-sm font-bold inline-flex items-center'>
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
