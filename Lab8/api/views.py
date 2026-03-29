from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorations.csrf import csrf_exempt
from .models import Product, Category
import json

def products_list(request):
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category.id,
            'category_name': product.category.name
        })
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category.id,
            'category_name': product.category.name
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product Not Found' }, status=404)


def categories_list(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name
        })
    return JsonResponse(data, safe=False)


def category(request, id):
    try:
        category = Category.objects.get(id=id)
        data = {
            id': category.id,
            'name': category.name
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category Not Found' }, status=404)


def category_by_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id,
                'category_name': product.category.name
            })
        return JsonResponse (data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category Not Found' }, status=404)
