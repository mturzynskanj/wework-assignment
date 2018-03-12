import { ARCHIVE_SEARCH } from '../actionTypes'

export const archiveSearch = (searchCriteria= {}) => {
    return {
        type: ARCHIVE_SEARCH,
        searchCriteria
    }
}
