import { useState, useRef, useEffect } from 'react'

export function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    // Error validation
    if (search === '') {
      setError(`You can't search for empty movies`)
      return
    }

    if (search.match(/^\d+$/)) {
      setError(`You can't search for movies with a number at start`)
      return
    }

    if (search.length < 3) {
      setError(`Search must be at least 3 characters`)
      return
    }

    // Clear error if all validations pass
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

