import React from 'react';
import { Provider } from 'react-redux'
import { act, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { createTestStore } from './domain/test-store';

describe('Authentication', () => {
  it('should authenticate a user to his spotify profile', async () => {
    const store = createTestStore({})

    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const authenticateUserBtn = screen.getByTestId('spotify-react-authenticate-user')

    expect(authenticateUserBtn.textContent).toEqual('Connexion')

    // act ==> Authenticate User
    act(() => authenticateUserBtn.click())

    await waitFor(() => {
      const accessToken = screen.getByTestId('spotify-react-access-token')
      expect(accessToken).toBeInTheDocument()
      expect(accessToken).toHaveTextContent('You are connected !')
      expect(authenticateUserBtn).not.toBeInTheDocument()
    })
  })
})