/**
 * Page title type.
 */
type PageTitle = "Home Page" | "Unit Page" | "404 Page" | "Unit Detail Page";

/**
 * Mapping between pathnames and page titles.
 */
interface PageTitleMap {
  [key: string]: PageTitle;
}

/**
 * Get the page title based on the provided pathname.
 * @param {string} pathname - The pathname of the page.
 * @returns {string} - The page title: 'Home Page' | 'Unit Page' | '404 Page'.
 *
 * @example
 * getPageTitle('/unit'); // 'Unit Page'
 */
const getPageTitle = (pathname: string): PageTitle => {
  const pageTitleMap: PageTitleMap = {
    "/": "Home Page",
    "/unit": "Unit Page",
    "/unit-detail": "Unit Detail Page",
  };

  return pageTitleMap[pathname] || "404 Page";
};

export default getPageTitle;
