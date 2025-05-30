import React, { useState } from 'react';

function Hero() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px',
        paddingBottom: '0'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          margin: '0'
        }}>
          Support Portal
        </h1>
        <button style={{
          padding: '8px 16px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
          Track tickets
        </button>
      </div>

      <div style={{ padding: '48px 24px' }}>
        {/* Main content area */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Search section */}
          <div style={{ marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '300',
              marginBottom: '32px',
              maxWidth: '600px',
              lineHeight: '1.4'
            }}>
              Search for an answer or browse help topics to create a ticket
            </h2>
            
            <div style={{
              position: 'relative',
              maxWidth: '800px'
            }}>
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                style={{
                  width: '100%',
                  padding: '16px 56px 16px 24px',
                  color: '#374151',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <button style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#9ca3af'
              }}>
                🔍
              </button>
            </div>
          </div>

          {/* Quick links and featured section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px'
          }}>
            {/* Quick links */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '32px'
              }}>
                <button style={{
                  padding: '12px 24px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '24px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}>
                  Track account opening
                </button>
                
                <button style={{
                  padding: '12px 24px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '24px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}>
                  Track segment activation
                </button>
                
                <button style={{
                  padding: '12px 24px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '24px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}>
                  Intraday margins
                </button>
              </div>
              
              <button style={{
                padding: '12px 24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '24px',
                backgroundColor: 'transparent',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'scale(1)';
              }}>
                Kite user manual
              </button>
            </div>

            {/* Featured section */}
            <div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '500',
                marginBottom: '24px'
              }}>
                Featured
              </h3>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginRight: '12px',
                      marginTop: '4px'
                    }}>
                      1.
                    </span>
                    <span style={{
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}>
                      Rights Entitlements listing in May 2025
                    </span>
                  </div>
                  <span style={{
                    marginLeft: '8px',
                    marginTop: '4px',
                    fontSize: '14px'
                  }}>
                    ↗
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginRight: '12px',
                      marginTop: '4px'
                    }}>
                      1.
                    </span>
                    <span style={{
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}>
                      Offer for sale (OFS) - May 2025
                    </span>
                  </div>
                  <span style={{
                    marginLeft: '8px',
                    marginTop: '4px',
                    fontSize: '14px'
                  }}>
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
