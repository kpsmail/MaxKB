import Layout from '@/layout/main-layout/index.vue'
const datasetRouter = {
  path: '/dataset',
  name: 'dataset',
  meta: { title: '数据集', permission: 'DATASET:READ' },
  redirect: '/dataset',
  children: [
    {
      path: '/dataset',
      name: 'dataset',
      component: () => import('@/views/dataset/index.vue')
    },
    {
      path: '/dataset/:type', // create 或者 upload
      name: 'CreateDataset',
      meta: { activeMenu: '/dataset' },
      component: () => import('@/views/dataset/CreateDataset.vue'),
      hidden: true
    },
    {
      path: '/dataset/:id',
      name: 'DatasetDetail',
      meta: { title: '文档', activeMenu: '/dataset' },
      component: Layout,
      hidden: true,
      children: [
        {
          path: 'document',
          name: 'Document',
          meta: {
            icon: 'Document',
            title: '文档',
            active: 'document',
            parentPath: '/dataset/:id',
            parentName: 'DatasetDetail'
          },
          component: () => import('@/views/document/index.vue')
        },
        {
          path: 'setting',
          name: 'DatasetSetting',
          meta: {
            icon: 'Setting',
            title: '设置',
            active: 'setting',
            parentPath: '/dataset/:id',
            parentName: 'DatasetDetail'
          },
          component: () => import('@/views/document/DatasetSetting.vue')
        }
      ]
    },
    {
      path: '/dataset/:id/:documentId', // 分段详情
      name: 'Paragraph',
      meta: { activeMenu: '/dataset' },
      component: () => import('@/views/paragraph/index.vue'),
      hidden: true
    }
  ]
}

export default datasetRouter