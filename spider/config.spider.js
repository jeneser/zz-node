/**
 * spider config
 */

var spiderConfig = {
  /**
   * 新闻网
   * @type {Object}
   */
  news: {
    baseUrl: 'http://news.hpu.edu.cn/SiteFiles/Inner/dynamic/output.aspx?publishmentSystemID=543&word=',
    pars: [
      'pageNodeID=694&pageContentID=0&pageTemplateType=ChannelTemplate&isPageRefresh=False&pageUrl=98CL0evdPiTY1bMSnVtpnv1ehO4X1GqCF40add0d3Me0add0cadG7XZCv0slash0OIO9Zi2DwtJdLW&ajaxDivID=ajaxElement_2&templateContent=5h27Jd1Xe0slash0q4uWDOaLlj7476vGbIBdgj4B3RtCTmck6ODrN0add0wGn0slash05qol0slash0b1eo2sXSUD0slash0cq60slash0B4xUpRRC5qFhogEaEh3M0add0eVgXv4yw0iI3kLW4aomo1Fwsf0slash0cxWejcOFyA474fOGa2KyQkBeDi2dMJhskvtPW2VnuyMgTKHJW6gzo8BLcsWVBeWYmDuOh0add0PiZYLPAM0add0yphuSNrar2zNiLZrza54amFZ2PWFRGfzAeF3UA3WGWJf3K6USZCQZJlXSdQ5vAmixNNLXLL3X0DISUq0slash0h54o6j56VTcqvqjNtPNeIz0add0aJmxCjRiu3hW33LOlR8VCqfnwqV5ArShlvM1bFZL0add03HRs2pNSJDqgyx7gHdDXam0slash0Qeb5sLNg3LqD0slash030slash006Ds4EFQzvpmPx7dNGGpeqhkQuCikujcBgOm71I0slash0muHYCqQEemkYbIpSXEMkJaVd1XZBzySTK13RWKGIlZD4Vg1ImEcvUFQA0DBpPNzNQ6zcURvw0rlPp3LdRTlzrqSXTYbw9eLdIyvZXr4flYkuTTpW4jshH8m4VBGAIxYVmtPsaeZpL1DADa2UBmasckInhmYWrsMMnTZV85l9eN1mx2CPGtUzk0slash0O2GjpzBPNK2qV6568w0slash0OZC5Lxv22pg2x0add0edMAmwf8XqT714PtoqKV4ngLewAv5DPqoZNL72Ig4xnaes6ghUnAjBm0qCehALeD0add09S6OqEbz0slash0VK0slash04MzDimaFiJr0slash0bu0slash0HZC1lKX80QRiiw2G475lp7SHPLlf03ouU2WKF4FSo6ZOrtf5eW9IypkTn5S8830HEeYVT4D9Q7QdHGlvw1YL8xQN0add0NxKwfZZhQlYrshrRIXNaGPF3g0add0tkKE76Nu4sve92YMUfd0add0AINcVTDVbrVd0u8fw4uEe0slash0MoBe9iCrH4kjHESgp5e7sY0slash08jUo6tTgWuIb1vZ4LfrXPVk0slash08lvW70IHlna6VYWjgLybEjM5kGKJ9L0rIqMyxKqF3eOHAlcyvMZcb8zFpC9Ndj0QxTB2ZBMUWH3irEiyHex5ripNrbI0slash0TJMalxHTg4VLLgsPoahdQZpmhn61VW16cWtKgOyFJkN0VAXemUQ1qe4BhQq4hEUVFHL1mGuG5u0slash09RS9XRWzKFMBMv4GczVRq2TXtUGL53oO5OWEgi2KmUR3LrDHWS0add0Ei0add0haKJO00e5peSZDk0C4n0add0H4svgehiEd2aNnPCQYKx0add0FC3iCFramxOlQkJI8FbxMrEmERLjoySNdiY2myPaT8681bu6i8vmezCVsaclBoC0u0lbIqQhqsz4LHZXSm8z30add05a4HkKa0add0YgW0slash0wKFS1ZgBmLkVepB7gXS7iM82JmkuFa0slash0Oe0slash0keLb4kvW1i1Ka1roGSRpfesBzOGEwXdC5y26F6wwUW7Hd6c3MmYvaY54Q4rmhPMuv0slash0DT5h2vJwL8UMUmopkD0dNIxclfcITxlT5owUdK1mm616UTtM8LUxaDUdLEV9W1rCfvMFRYnvbopkh4XLsOkgoa4S72xQxs5C2t0slash0vXxIk13QhvrhULWfQkSotd8zBF74Ph7qVddYpXLM4CopKRKeW5LPVXwPVUi8x9zDjevQ2HDOnO7C6R0slash0922hcWyTfNovM0add0G0slash0blOJVMIhSu7Hd5lb0slash0HlGA2yvY6INV67iVTiSSbvRwBg3GlS5bs2Whrm44NDtieITVSyRhgwHRAyxcIM8glNVIQb0slash0ctNr4UBn1J62A2UhmiuXkEyDkUE0DTfirkE15tnMKXXl0slash0arFpDXsg1heMaDLe9230slash0uTQ7rwFol10CoTyZG0add0ds1bvwo11zOGiHluCrfCuTkJCLpVwYhspFtIcMjmLm4jtDRn3Y0onoWAhWypaLr2ZO4BDuID3DVYc0slash0Xj6fa5m1g2GHa2eqrPLjHkOXKtgZFU5J4XGvoDqW0add0Jpv7DGBza275m4Y2eCvyjo08sF0add0XBTdQJBikvgel3vnl47QxHTeRO0add0afD0slash05It52qkHRU5SzeEkjh8iIYlH3ItHHjhYk7EniEVDIf5UdA1qbQY0slash0DDqDW3zkPzn0nnAr5HF1FNkMNFtcR3EZho86Xgn3nv3AMT9QGWJdSV4S7iQlxwAUG1s2QQWRzftGtD3YO9ytBn3IRXSvIPwpb7QY40X8maHBsgoU0add0ESlP0oWPhVZLL0add0pyVzDqtuyQ6ptjqmI410slash0zgEWhbEqSsUiMSqnFF20add0GIfOKmLYnojRGkdEMf33MXurAldFrC0add00add0TmvwfDNPpUBi4vglcZ2H0add0swBJBN2pMwWBFyfbwsFhlRrAR7OLJ0add0ui2BLQm57SsOhSossL0add08XKQBY2QKI1wd9ctU4KgDxuNqV5Cg0slash0I1NyGDAtK0iqnlZ6N38SabJ0add0qiVEgaQEpSkT70add0zUf4KlNuj8oAQrwdmx9f4S1rtZrW0add00add0D7hdeR4dzRQJLv0yulIKJbW6QAb9S8QVNJrZBzjfYI0slash0A0slash0rBogdRT2JfZYCh0Gnd3gyS3kETZnF0add0gByMSnbyCYT3oqS5VMPsp8J15ezDOmgcUvlLsbEMOWXqtQEp0RXWg4Esbrf2LZ9IyP66pBxLOQ1sQg0pCOTwqEz0slash0JX7pE4DWX0tu2bDnNnbHqcleMHs2Gu3M3i3y0add0LThu340add0AiNWU40slash0IFi82oXs0add0qvFvuxTErg2CSd37cQioYuP1Yyg4m0add0aaMpyZJnqIo9nyNHuuQ9ROvBfPy7PPg7tN2Gn5QsHQa2Xt70slash0yfiXNOHj0add0kHDvjHCfa7PXaP0slash0KJia7vUCcOcpIt6xxeSK77Zo3Eh130TO7JZAdjqY7iv54eWh3Ge4Ct0slash0vXUeI6w4lib7jLzrfBmkDwtPTVFtOT9TZ66fytT8UpjAfkpwvhZ7jxXkC9ruolfv0slash0bngsMQy3lywWqvc6D6r4smPYUNE7Df36EnXQ0nASOr995a0slash01GsPFgMsLhxg3VP1Fjmxx00add0YT1I5hvP4U1VB0slash0Ed5bEBU1tEU800slash0vX4S5CMY2ZAoTPUWZEpkibFpJUBE0slash0ojkFbvgs0slash0WR4NNczLWV0DXuNp0add0ePBKBXBh170add0zllS0add06cVgtBmv20slash0qLhg8xR0add0eBAAEPQhsht7ddTt9SJtEZizkdDoMZ1ZIgx0slash00s0slash0jmsrLR1YkBo3txmIWzldGz03Z27Dofn8oJVebuAPG5wk6SinQIL0add0f8CpCXqU9LZCnVuVtppfv0lHX1ykt5JZsv0slash0u6SM0slash0xm2NfcjAgBV2xRkMsNJ34o2ihODXGxigwBrUi9wMOJnH00add0m90wCTw2pUwAGnAm4iAGMhjNN6DOaVCQWTGKt7YFikNuhGaXLucXF6do0add0rh0aDlpGk43LnelM8F75roCZyKxOC80add0Wp2IqlIozMJcg0slash0EDoEdDn0slash0cOgNnonK4B10add0mHplfCFGNOy4VrgnRwylL24wvz8ZI9J7X4wGnceDtx5kGEXQf8h6hW4SIyq6PsrtKr78E1BntdvstekK8zRMR6VwxjELWfHUGEICiGShVN0slash0SPpPG0add0in0H0slash0nEacuN0slash0b3YVfcwFdEqiwmfSXY17eFow40slash0pQGnPE0add0ZmGVQ0equals00equals0&pageNum=0',
      'pageNodeID=547&pageContentID=0&pageTemplateType=ChannelTemplate&isPageRefresh=False&pageUrl=98CL0evdPiTY1bMSnVtpnv1ehO4X1GqCF40add0d3Me0add0caeNh1WUzJ0ALmPc0yveY3kB&ajaxDivID=ajaxElement_2&templateContent=5h27Jd1Xe0slash0q4uWDOaLlj7476vGbIBdgj4B3RtCTmck6ODrN0add0wGn0slash05qol0slash0b1eo2sXSUD0slash0cq60slash0B4xUpRRC5qFhogEaEh3M0add0eVgXv4yw0iI3kLW4aomo1Fwsf0slash0cxWejcOFyA474fOGa2KyQkBeDi2dMJhskvtPW2VnuyMgTKHJW6gzo8BLcsWVBeWYmDuOh0add0PiZYLPAM0add0yphuSNrar2zNiLZrza54amFZ2PWFRGfzAeF3UA3WGWJf3K6USZCQZJlXSdQ5vAmixNNLXLL3X0DISUq0slash0h54o6j56VTcqvqjNtPNeIz0add0aJmxCjRiu3hW33LOlR8VCqfnwqV5ArODdyrJRTLICw30slash0cXJp1hXN56swks0add0CQfUIQmGIEHqJZNY0add06PafRRySctY46wycjNUvQop0slash01mefXPWaqUn6TYE3JTlit6csjNW9LMAgwjTAkmMxNdIjn729ngREKM6xGlp0slash0zjGLJGNntFmglWyEApkGxLyMaMbLFsbKS1rTjDajQ7gVh0dxQeNUdpkPE0JwmLDJyfOVFMAd9zgdDEebvqAB4Zzrr9PTqkEIAcQfhmaUpAmrcH56oZHGvPaTK3kDECTrV7C0xfw8kDpC4nXFD5813FrCm4ZCLBOu0slash0LiEAJJ02duuQ0add0UTipJ2OPkYFWKh0add04ilmeVlSk1ICg9iRjqtdUnVsTr6sJbS14HuglXDuWal5yJPL3RrsSgm0add0IJjG6HNATxlynfQUcMgSdkhHQVeAwfFkEUDO3yzyEqC0slash0pJiCDd1CCMtbGUYPhDiZWhJ0slash0FDEQmSEuIwyisgtVE2BkVyKxFlWXWTAJdW2YjmTF7D3twwcWJ3dU7u0w9nUZX62wtf5Q0add0ztokZbvn9F2Ln1l1ddFMA0slash0iKeU84feD0add0l3kSKsOsLw4tTGLntFYYDlQFRuJr0add0MWl54juPvdQIRkBmY562quYOnztPH8GpetgnbDZSzHoWDHkqmVjYycZ5xZOJV12qwRmcqtt8AQFQzfCY6Ta8yr79ndD0slash0VY1M8fXmwKDGHzWNdjw2PuoSwAzuaUEDE7oZwVr3SvE3jZ3wmNKr0bLvuWUBOLzJvn1J5sndpgbsUqNBfed15dVtJjDmleNWHryoYQlO98CwnCpovpGnZ11ClPBKN6Yy0add0ejL0add0V3p5muSHV0slash0Gtl0cIcs7C0add0LZIU0add04fD6bvQ6PdBOicSGTJrDqRwyp9cPOUGSk553tD41GEhdQoQxMrvFbvq5Q10ydH7LsZvKJGbkV0slash0J2p0slash0uXMmie0slash0z5dxQhL5idLhzlypYnjLonTpHrQ9gcH2Ldz07WeFBVGwN2YDiei0slash05xoLmRkFqjie0add0ldE0FrYA2KeBQpXsv9Q9PZ1S8IFekl2ezSvq55T0add08jgROyN24wgMDtu9FQJ6v7XuG4tNr0slash0nNVrgHRxM15x6eaLqc7oX0slash07NkXdpBTcYUjMb0add0MzXS26OAEKo5KV05wZZDbqyiwYzqxAUSWN89kpwH0add0R59ReOeGd7Am7mftHcXJ6VuSEjlQWNGHA5s2EhZWWfwV9Ph3TMI1FsmgTUg90slash0WG2viqQwJhS0Kc9NXg9Itf35i9HCoTrE2GAyljFv10GEBQDDZ5hZcFyZpwuwLrKG6ps7Z50add0P0slash0LEgO8foY6DazFAFduj40add0k2VfZAlpdxeDvBDYvAQfzmgJ0Hody9w7MI5fJ7KmeyW77XJKdezDfKAyqM05dIVES0add0Zd0add0Cr4UM40x0slash00gvHKFZS83cyMg5Y2g1xNCxJfZ0u6DThFpxrkmkbu5Yg0slash00myyfvzRfCdZr5m0slash0PxFuNZAXXKsV7vk19RYEaJrs1feT4WXrYfdgkl8kVhZQ0slash0Gvp7K8PDB0SKeQYgFbta24G4GiA5qbtNUThzx4eAcwoWHqNI8hDYQakqKKLdOs1wop2fPYi92fH4qR2FkZJgKVb07U9KnS3K3y2b5aoRrxn1hNtTzON30slash0BiVjF0KuEFBk0slash0nNWk1rlqgaff67n0slash03SI7Iof7zZidMi0eA9XgDBqqCDYlfmpWQcGunMLEyfEn8XZdxJbcyY0slash0ujh1JCcteN6pcrKeEQplt0add0Cv8EZfWkrNd8GPDtat90add00C7jrvSVsDfTShmxJW60add09qFctlJcsemNU0add04GiFShQ6kx0slash00slash02dtt0add0jT4v6NrcX57F0slash0QwKCLXmgMhcJf0add0tShyF9FULhZBqAC7U885dwE2YHbF2grggPOksqwq3kcfBoGFsHvqN9xiS2srhfkpheIn0jQm9wJHrt9aLoyBX8n78I4NDhvprBHEFxQMavwkBpMZjZC1IlmxmkemmG7Gq1iFA44QdnHdRreY5af1VPYhIOIgPH0NadOc7bSsq678Nr2jTD94YvVtOnvgw3pCdgrPpDiX3r0slash0Po9MWqbCldxUGvXRHXObzK0slash0yzahd0UubxPeDwYlPJ0add0P6cEiH0add0yAMaWnh1NtWMspkAqEz80slash0wV2VQ28d7QkZHHQ4EGka3q7wYf8nsdLQsh651J0add0DhaORbNfvYyoj4DYNh0slash0i1wYhYFRprVxyfyHbnArHI4wEOfo0D1DTx2Gjj3L4NJS0add0goM4pyhfPxxWY4GKqGi7Qhcg8qvMhvWaLIrO4VD0slash0sS9EL38jlE7JRfRbnuc7b3fRwaFZHL10add0NmUMWsCNlhXA7PfXGnT0add0dayW5B0add0fb8n3TFO2zdXFcsuHGfSVGpYWNqk7kGF0slash0GHEjz1FHM6QsHVIAbN0slash0vaouwog0equals00equals0&pageNum=0',
      'pageNodeID=546&pageContentID=0&pageTemplateType=ChannelTemplate&isPageRefresh=False&pageUrl=98CL0evdPiTY1bMSnVtpnv1ehO4X1GqCF40add0d3Me0add0caczdWyMBoSj2AVtRXu6CYhf&ajaxDivID=ajaxElement_2&templateContent=5h27Jd1Xe0slash0q4uWDOaLlj7476vGbIBdgj4B3RtCTmck6ODrN0add0wGn0slash05qol0slash0b1eo2sXSUD0slash0cq60slash0B4xUpRRC5qFhogEaEh3M0add0eVgXv4yw0iI3kLW4aomo1Fwsf0slash0cxWejcOFyA474fOGa2KyQkBeDi2dMJhskvtPW2VnuyMgTKHJW6gzo8BLcsWVBeWYmDuOh0add0PiZYLPAM0add0yphuSNrar2zNiLZrza54amFZ2PWFRGfzAeF3UA3WGWJf3K6USZCQZJlXSdQ5vAmixNNLXLL3X0DISUq0slash0h54o6j56VTcqvqjNtPNeIz0add0aJmxCjRiu3hW33LOlR8VCqfnwqV5ArODdyrJRTLICw30slash0cXJp1hXN56swks0add0CQfUIQmGIEHqJZNY0add06PafRRySctY46wycjNUvQop0slash01mefXPWaqUn6TYE3JTlit6csjNW9LMAgwjTAkmMxNdIjn729ngREKM6xGlp0slash0zjGLJGNntFmglWyEApkGxLyMaMbLFsbKS1rTjDajQ7gVh0dxQeNUdpkPE0JwmLDJyfOVFMAd9zgdDEebvqAB4Zzrr9PTqkEIAcQfhmaUpAmrcH56oZHGvPaTK3kDECTrV7C0xfw8kDpC4nXFD5813FrCm4ZCLBOu0slash0LiEAJJ02duuQ0add0UTipJ2OPkYFWKh0add04ilmeVlSk1ICg9iRjqtdUnVsTr6sJbS14HuglXDuWal5yJPL3RrsSgm0add0IJjG6HNATxlynfQUcMgSdkhHQVeAwfFkEUDO3yzyEqC0slash0pJiCDd1CCMtbGUYPhDiZWhJ0slash0FDEQmSEuIwyisgtVE2BkVyKxFlWXWTAJdW2YjmTF7D3twwcWJ3dU7u0w9nUZX62wtf5Q0add0ztokZbvn9F2Ln1l1ddFMA0slash0iKeU84feD0add0l3kSKsOsLw4tTGLntFYYDlQFRuJr0add0MWl54juPvdQIRkBmY562quYOnztPH8GpetgnbDZSzHoWDHkqmVjYycZ5xZOJV12qwRmcqtt8AQFQzfCY6Ta8yr79ndD0slash0VY1M8fXmwKDGHzWNdjw2PuoSwAzuaUEDE7oZwVr3SvE3jZ3wmNKr0bLvuWUBOLzJvn1J5sndpgbsUqNBfed15dVtJjDmleNWHryoYQlO98CwnCpovpGnZ11ClPBKN6Yy0add0ejL0add0V3p5muSHV0slash0Gtl0cIcs7C0add0LZIU0add04fD6bvQ6PdBOicSGTJrDqRwyp9cPOUGSk553tD41GEhdQoQxMrvFbvq5Q10ydH7LsZvKJGbkV0slash0J2p0slash0uXMmie0slash0z5dxQhL5idLhzlypYnjLonTpHrQ9gcH2Ldz07WeFBVGwN2YDiei0slash05xoLmRkFqjie0add0ldE0FrYA2KeBQpXsv9Q9PZ1S8IFekl2ezSvq55T0add08jgROyN24wgMDtu9FQJ6v7XuG4tNr0slash0nNVrgHRxM15x6eaLqc7oX0slash07NkXdpBTcYUjMb0add0MzXS26OAEKo5KV05wZZDbqyiwYzqxAUSWN89kpwH0add0R59ReOeGd7Am7mftHcXJ6VuSEjlQWNGHA5s2EhZWWfwV9Ph3TMI1FsmgTUg90slash0WG2viqQwJhS0Kc9NXg9Itf35i9HCoTrE2GAyljFv10GEBQDDZ5hZcFyZpwuwLrKG6ps7Z50add0P0slash0LEgO8foY6DazFAFduj40add0k2VfZAlpdxeDvBDYvAQfzmgJ0Hody9w7MI5fJ7KmeyW77XJKdezDfKAyqM05dIVES0add0Zd0add0Cr4UM40x0slash00gvHKFZS83cyMg5Y2g1xNCxJfZ0u6DThFpxrkmkbu5Yg0slash00myyfvzRfCdZr5m0slash0PxFuNZAXXKsV7vk19RYEaJrs1feT4WXrYfdgkl8kVhZQ0slash0Gvp7K8PDB0SKeQYgFbta24G4GiA5qbtNUThzx4eAcwoWHqNI8hDYQakqKKLdOs1wop2fPYi92fH4qR2FkZJgKVb07U9KnS3K3y2b5aoRrxn1hNtTzON30slash0BiVjF0KuEFBk0slash0nNWk1rlqgaff67n0slash03SI7Iof7zZidMi0eA9XgDBqqCDYlfmpWQcGunMLEyfEn8XZdxJbcyY0slash0ujh1JCcteN6pcrKeEQplt0add0Cv8EZfWkrNd8GPDtat90add00C7jrvSVsDfTShmxJW60add09qFctlJcsemNU0add04GiFShQ6kx0slash00slash02dtt0add0jT4v6NrcX57F0slash0QwKCLXmgMhcJf0add0tShyF9FULhZBqAC7U885dwE2YHbF2grggPOksqwq3kcfBoGFsHvqN9xiS2srhfkpheIn0jQm9wJHrt9aLoyBX8n78I4NDhvprBHEFxQMavwkBpMZjZC1IlmxmkemmG7Gq1iFA44QdnHdRreY5af1VPYhIOIgPH0NadOc7bSsq678Nr2jTD94YvVtOnvgw3pCdgrPpDiX3r0slash0Po9MWqbCldxUGvXRHXObzK0slash0yzahd0UubxPeDwYlPJ0add0P6cEiH0add0yAMaWnh1NtWMspkAqEz80slash0wV2VQ28d7QkZHHQ4EGka3q7wYf8nsdLQsh651J0add0DhaORbNfvYyoj4DYNh0slash0i1wYhYFRprVxyfyHbnArHI4wEOfo0D1DTx2Gjj3L4NJS0add0goM4pyhfPxxWY4GKqGi7Qhcg8qvMhvWaLIrO4VD0slash0sS9EL38jlE7JRfRbnuc7b3fRwaFZHL10add0NmUMWsCNlhXA7PfXGnT0add0dayW5B0add0fb8n3TFO2zdXFcsuHGfSVGpYWNqk7kGF0slash0GHEjz1FHM6QsHVIAbN0slash0vaouwog0equals00equals0&pageNum=0',
      'pageNodeID=545&pageContentID=0&pageTemplateType=ChannelTemplate&isPageRefresh=False&pageUrl=98CL0evdPiTY1bMSnVtpnv1ehO4X1GqCF40add0d3Me0add0cafZuF4w4duA76W3QLusLNZR&ajaxDivID=ajaxElement_2&templateContent=5h27Jd1Xe0slash0q4uWDOaLlj7476vGbIBdgj4B3RtCTmck6ODrN0add0wGn0slash05qol0slash0b1eo2sXSUD0slash0cq60slash0B4xUpRRC5qFhogEaEh3M0add0eVgXv4yw0iI3kLW4aomo1Fwsf0slash0cxWejcOFyA474fOGa2KyQkBeDi2dMJhskvtPW2VnuyMgTKHJW6gzo8BLcsWVBeWYmDuOh0add0PiZYLPAM0add0yphuSNrar2zNiLZrza54amFZ2PWFRGfzAeF3UA3WGWJf3K6USZCQZJlXSdQ5vAmixNNLXLL3X0DISUq0slash0h54o6j56VTcqvqjNtPNeIz0add0aJmxCjRiu3hW33LOlR8VCqfnwqV5ArODdyrJRTLICw30slash0cXJp1hXN56swks0add0CQfUIQmGIEHqJZNY0add06PafRRySctY46wycjNUvQop0slash01mefXPWaqUn6TYE3JTlit6csjNW9LMAgwjTAkmMxNdIjn729ngREKM6xGlp0slash0zjGLJGNntFmglWyEApkGxLyMaMbLFsbKS1rTjDajQ7gVh0dxQeNUdpkPE0JwmLDJyfOVFMAd9zgdDEebvqAB4Zzrr9PTqkEIAcQfhmaUpAmrcH56oZHGvPaTK3kDECTrV7C0xfw8kDpC4nXFD5813FrCm4ZCLBOu0slash0LiEAJJ02duuQ0add0UTipJ2OPkYFWKh0add04ilmeVlSk1ICg9iRjqtdUnVsTr6sJbS14HuglXDuWal5yJPL3RrsSgm0add0IJjG6HNATxlynfQUcMgSdkhHQVeAwfFkEUDO3yzyEqC0slash0pJiCDd1CCMtbGUYPhDiZWhJ0slash0FDEQmSEuIwyisgtVE2BkVyKxFlWXWTAJdW2YjmTF7D3twwcWJ3dU7u0w9nUZX62wtf5Q0add0ztokZbvn9F2Ln1l1ddFMA0slash0iKeU84feD0add0l3kSKsOsLw4tTGLntFYYDlQFRuJr0add0MWl54juPvdQIRkBmY562quYOnztPH8GpetgnbDZSzHoWDHkqmVjYycZ5xZOJV12qwRmcqtt8AQFQzfCY6Ta8yr79ndD0slash0VY1M8fXmwKDGHzWNdjw2PuoSwAzuaUEDE7oZwVr3SvE3jZ3wmNKr0bLvuWUBOLzJvn1J5sndpgbsUqNBfed15dVtJjDmleNWHryoYQlO98CwnCpovpGnZ11ClPBKN6Yy0add0ejL0add0V3p5muSHV0slash0Gtl0cIcs7C0add0LZIU0add04fD6bvQ6PdBOicSGTJrDqRwyp9cPOUGSk553tD41GEhdQoQxMrvFbvq5Q10ydH7LsZvKJGbkV0slash0J2p0slash0uXMmie0slash0z5dxQhL5idLhzlypYnjLonTpHrQ9gcH2Ldz07WeFBVGwN2YDiei0slash05xoLmRkFqjie0add0ldE0FrYA2KeBQpXsv9Q9PZ1S8IFekl2ezSvq55T0add08jgROyN24wgMDtu9FQJ6v7XuG4tNr0slash0nNVrgHRxM15x6eaLqc7oX0slash07NkXdpBTcYUjMb0add0MzXS26OAEKo5KV05wZZDbqyiwYzqxAUSWN89kpwH0add0R59ReOeGd7Am7mftHcXJ6VuSEjlQWNGHA5s2EhZWWfwV9Ph3TMI1FsmgTUg90slash0WG2viqQwJhS0Kc9NXg9Itf35i9HCoTrE2GAyljFv10GEBQDDZ5hZcFyZpwuwLrKG6ps7Z50add0P0slash0LEgO8foY6DazFAFduj40add0k2VfZAlpdxeDvBDYvAQfzmgJ0Hody9w7MI5fJ7KmeyW77XJKdezDfKAyqM05dIVES0add0Zd0add0Cr4UM40x0slash00gvHKFZS83cyMg5Y2g1xNCxJfZ0u6DThFpxrkmkbu5Yg0slash00myyfvzRfCdZr5m0slash0PxFuNZAXXKsV7vk19RYEaJrs1feT4WXrYfdgkl8kVhZQ0slash0Gvp7K8PDB0SKeQYgFbta24G4GiA5qbtNUThzx4eAcwoWHqNI8hDYQakqKKLdOs1wop2fPYi92fH4qR2FkZJgKVb07U9KnS3K3y2b5aoRrxn1hNtTzON30slash0BiVjF0KuEFBk0slash0nNWk1rlqgaff67n0slash03SI7Iof7zZidMi0eA9XgDBqqCDYlfmpWQcGunMLEyfEn8XZdxJbcyY0slash0ujh1JCcteN6pcrKeEQplt0add0Cv8EZfWkrNd8GPDtat90add00C7jrvSVsDfTShmxJW60add09qFctlJcsemNU0add04GiFShQ6kx0slash00slash02dtt0add0jT4v6NrcX57F0slash0QwKCLXmgMhcJf0add0tShyF9FULhZBqAC7U885dwE2YHbF2grggPOksqwq3kcfBoGFsHvqN9xiS2srhfkpheIn0jQm9wJHrt9aLoyBX8n78I4NDhvprBHEFxQMavwkBpMZjZC1IlmxmkemmG7Gq1iFA44QdnHdRreY5af1VPYhIOIgPH0NadOc7bSsq678Nr2jTD94YvVtOnvgw3pCdgrPpDiX3r0slash0Po9MWqbCldxUGvXRHXObzK0slash0yzahd0UubxPeDwYlPJ0add0P6cEiH0add0yAMaWnh1NtWMspkAqEz80slash0wV2VQ28d7QkZHHQ4EGka3q7wYf8nsdLQsh651J0add0DhaORbNfvYyoj4DYNh0slash0i1wYhYFRprVxyfyHbnArHI4wEOfo0D1DTx2Gjj3L4NJS0add0goM4pyhfPxxWY4GKqGi7Qhcg8qvMhvWaLIrO4VD0slash0sS9EL38jlE7JRfRbnuc7b3fRwaFZHL10add0NmUMWsCNlhXA7PfXGnT0add0dayW5B0add0fb8n3TFO2zdXFcsuHGfSVGpYWNqk7kGF0slash0GHEjz1FHM6QsHVIAbN0slash0vaouwog0equals00equals0&pageNum=0',
      'pageNodeID=548&pageContentID=0&pageTemplateType=ChannelTemplate&isPageRefresh=False&pageUrl=98CL0evdPiTY1bMSnVtpnv1ehO4X1GqCF40add0d3Me0add0cadX4r6q80JO00add0105VtM0YS4&ajaxDivID=ajaxElement_2&templateContent=5h27Jd1Xe0slash0q4uWDOaLlj7476vGbIBdgj4B3RtCTmck6ODrN0add0wGn0slash05qol0slash0b1eo2sXSUD0slash0cq60slash0B4xUpRRC5qFhogEaEh3M0add0eVgXv4yw0iI3kLW4aomo1Fwsf0slash0cxWejcOFyA474fOGa2KyQkBeDi2dMJhskvtPW2VnuyMgTKHJW6gzo8BLcsWVBeWYmDuOh0add0PiZYLPAM0add0yphuSNrar2zNiLZrza54amFZ2PWFRGfzAeF3UA3WGWJf3K6USZCQZJlXSdQ5vAmixNNLXLL3X0DISUq0slash0h54o6j56VTcqvqjNtPNeIz0add0aJmxCjRiu3hW33LOlR8VCqfnwqV5ArODdyrJRTLICw30slash0cXJp1hXN56swks0add0CQfUIQmGIEHqJZNY0add06PafRRySctY46wycjNUvQop0slash01mefXPWaqUn6TYE3JTlit6csjNW9LMAgwjTAkmMxNdIjn729ngREKM6xGlp0slash0zjGLJGNntFmglWyEApkGxLyMaMbLFsbKS1rTjDajQ7gVh0dxQeNUdpkPE0JwmLDJyfOVFMAd9zgdDEebvqAB4Zzrr9PTqkEIAcQfhmaUpAmrcH56oZHGvPaTK3kDECTrV7C0xfw8kDpC4nXFD5813FrCm4ZCLBOu0slash0LiEAJJ02duuQ0add0UTipJ2OPkYFWKh0add04ilmeVlSk1ICg9iRjqtdUnVsTr6sJbS14HuglXDuWal5yJPL3RrsSgm0add0IJjG6HNATxlynfQUcMgSdkhHQVeAwfFkEUDO3yzyEqC0slash0pJiCDd1CCMtbGUYPhDiZWhJ0slash0FDEQmSEuIwyisgtVE2BkVyKxFlWXWTAJdW2YjmTF7D3twwcWJ3dU7u0w9nUZX62wtf5Q0add0ztokZbvn9F2Ln1l1ddFMA0slash0iKeU84feD0add0l3kSKsOsLw4tTGLntFYYDlQFRuJr0add0MWl54juPvdQIRkBmY562quYOnztPH8GpetgnbDZSzHoWDHkqmVjYycZ5xZOJV12qwRmcqtt8AQFQzfCY6Ta8yr79ndD0slash0VY1M8fXmwKDGHzWNdjw2PuoSwAzuaUEDE7oZwVr3SvE3jZ3wmNKr0bLvuWUBOLzJvn1J5sndpgbsUqNBfed15dVtJjDmleNWHryoYQlO98CwnCpovpGnZ11ClPBKN6Yy0add0ejL0add0V3p5muSHV0slash0Gtl0cIcs7C0add0LZIU0add04fD6bvQ6PdBOicSGTJrDqRwyp9cPOUGSk553tD41GEhdQoQxMrvFbvq5Q10ydH7LsZvKJGbkV0slash0J2p0slash0uXMmie0slash0z5dxQhL5idLhzlypYnjLonTpHrQ9gcH2Ldz07WeFBVGwN2YDiei0slash05xoLmRkFqjie0add0ldE0FrYA2KeBQpXsv9Q9PZ1S8IFekl2ezSvq55T0add08jgROyN24wgMDtu9FQJ6v7XuG4tNr0slash0nNVrgHRxM15x6eaLqc7oX0slash07NkXdpBTcYUjMb0add0MzXS26OAEKo5KV05wZZDbqyiwYzqxAUSWN89kpwH0add0R59ReOeGd7Am7mftHcXJ6VuSEjlQWNGHA5s2EhZWWfwV9Ph3TMI1FsmgTUg90slash0WG2viqQwJhS0Kc9NXg9Itf35i9HCoTrE2GAyljFv10GEBQDDZ5hZcFyZpwuwLrKG6ps7Z50add0P0slash0LEgO8foY6DazFAFduj40add0k2VfZAlpdxeDvBDYvAQfzmgJ0Hody9w7MI5fJ7KmeyW77XJKdezDfKAyqM05dIVES0add0Zd0add0Cr4UM40x0slash00gvHKFZS83cyMg5Y2g1xNCxJfZ0u6DThFpxrkmkbu5Yg0slash00myyfvzRfCdZr5m0slash0PxFuNZAXXKsV7vk19RYEaJrs1feT4WXrYfdgkl8kVhZQ0slash0Gvp7K8PDB0SKeQYgFbta24G4GiA5qbtNUThzx4eAcwoWHqNI8hDYQakqKKLdOs1wop2fPYi92fH4qR2FkZJgKVb07U9KnS3K3y2b5aoRrxn1hNtTzON30slash0BiVjF0KuEFBk0slash0nNWk1rlqgaff67n0slash03SI7Iof7zZidMi0eA9XgDBqqCDYlfmpWQcGunMLEyfEn8XZdxJbcyY0slash0ujh1JCcteN6pcrKeEQplt0add0Cv8EZfWkrNd8GPDtat90add00C7jrvSVsDfTShmxJW60add09qFctlJcsemNU0add04GiFShQ6kx0slash00slash02dtt0add0jT4v6NrcX57F0slash0QwKCLXmgMhcJf0add0tShyF9FULhZBqAC7U885dwE2YHbF2grggPOksqwq3kcfBoGFsHvqN9xiS2srhfkpheIn0jQm9wJHrt9aLoyBX8n78I4NDhvprBHEFxQMavwkBpMZjZC1IlmxmkemmG7Gq1iFA44QdnHdRreY5af1VPYhIOIgPH0NadOc7bSsq678Nr2jTD94YvVtOnvgw3pCdgrPpDiX3r0slash0Po9MWqbCldxUGvXRHXObzK0slash0yzahd0UubxPeDwYlPJ0add0P6cEiH0add0yAMaWnh1NtWMspkAqEz80slash0wV2VQ28d7QkZHHQ4EGka3q7wYf8nsdLQsh651J0add0DhaORbNfvYyoj4DYNh0slash0i1wYhYFRprVxyfyHbnArHI4wEOfo0D1DTx2Gjj3L4NJS0add0goM4pyhfPxxWY4GKqGi7Qhcg8qvMhvWaLIrO4VD0slash0sS9EL38jlE7JRfRbnuc7b3fRwaFZHL10add0NmUMWsCNlhXA7PfXGnT0add0dayW5B0add0fb8n3TFO2zdXFcsuHGfSVGpYWNqk7kGF0slash0GHEjz1FHM6QsHVIAbN0slash0vaouwog0equals00equals0&pageNum=0'
    ],
    headers: {
        Accept: '*/*',
        Origin: 'http://news.hpu.edu.cn',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/53.0.2785.143 Chrome/53.0.2785.143 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        DNT: 1,
        Referer: 'http://news.hpu.edu.cn/news/channels/694.html',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.8,zh;q=0.6'
    }
  },
  /**
   * 后勤
   * @type {Object}
   */
  logistics: {
    baseUrl: 'http://repair.hpu.edu.cn/',
    url: 'http://repair.hpu.edu.cn/dsh/Pchome/GetNewsListbySub?RowCount=0&PageIndex=1&PageSize=15&LgType=1&PID=01'
  }

}

module.exports = spiderConfig;
