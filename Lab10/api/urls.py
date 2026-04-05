from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet, basename='category')
router.register(r'products', views.ProductViewSet, basename='product')

urlpatterns = [
    # Products
    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),

    # Categories 
    path('categories/', views.CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:pk>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
]